// Set variables
const amount = document.querySelector("#amount");
const people = document.querySelector("#people");
const service = document.querySelector("#service");
const tip = document.querySelector("#tip");
const submit = document.querySelector("#submit");
const content = document.querySelector("#content");

let summary = 0;
let amountV;
let peopleV;
let serviceV;

// Event listeners
amount.addEventListener("keyup", amountVal);

people.addEventListener("keyup", peopleVal);

service.addEventListener("change", serviceVal);

submit.addEventListener("click", submitForm);

// Functions
function amountVal(e) {
  e.preventDefault();
  if (e.target.value === "") {
    console.log("Should be a number");
  } else {
    amountV = 0;
    const num = parseFloat(e.target.value, 10);
    amountV += num;
  }
}

function peopleVal(e) {
  e.preventDefault();
  if (e.target.value === "") {
    console.log("Should be a number");
  } else {
    peopleV = 0;
    const num = parseFloat(e.target.value, 10);
    peopleV += num;
  }
}

function serviceVal(e) {
  e.preventDefault();
  if (e.target.value === "excellent") {
    serviceV = 0;
    serviceV = 0.15;
  } else if (e.target.value === "good") {
    serviceV = 0;
    serviceV = 0.1;
  } else if (e.target.value === "regular") {
    serviceV = 0;
    serviceV = 0.08;
  } else if (e.target.value === "bad") {
    serviceV = 0;
    serviceV = 0.05;
  }
}

function submitForm(e) {
  e.preventDefault();

  // Makes the final calculation
  summary = Number(Math.round((amountV / peopleV) * serviceV + 'e2')+ 'e-2');

  // Creates the parent element where it will be displayed
  if (tip.textContent === "") {
    const newh1 = document.createElement("h1");
    const h1Text = document.createTextNode(`Tip to pay: $${summary}`);
    newh1.appendChild(h1Text);
    newh1.className = "text-center pt-3 useMe";
    tip.appendChild(newh1);
  } else {
    const useMe = document.querySelector(".useMe");
    useMe.textContent = `Tip to pay: $${summary}`;
  }
}
