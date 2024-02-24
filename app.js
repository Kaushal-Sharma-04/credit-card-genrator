let url = "https://fakerapi.it/api/v1/credit_cards?_quantity=1";
let btn = document.querySelector("button");
let cardNumber = document.querySelector(".card-number");
let bankName = document.querySelector(".bank-name");
let cardHolder = document.querySelector(".owner");
let validDate = document.querySelector(".valid-date");

btn.addEventListener("click", async () => {
  card = await CardDetails();
  bankName.innerHTML = card.type;
  let cNo = card.number;
  let cnoFormat = cNo.match(/.{1,4}/g);
  cardNumber.innerHTML = cnoFormat.join(" ");
  cardHolder.innerHTML = card.owner;
  validDate.innerHTML = `VALID THRU<br>${card.expiration}`;
  document.querySelector(".card").style.display = "block";
});

async function CardDetails() {
  try {
    let res = await axios.get(url);
    return res.data.data[0];
  } catch (err) {
    document.querySelector(".card").style.display = "none";
    document.querySelector(".error").style.display = "block";
  }
}
