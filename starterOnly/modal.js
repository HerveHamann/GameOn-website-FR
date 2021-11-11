// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

///Work add by Herve Hamann 1

//close btn element
const closeBtn = document.querySelector(".close");

//entry elements

const inputs = document.querySelectorAll(
  'input[type="text"],input[type="email"],input[type="date"],input[type="number"]'
);
const cities = document.querySelectorAll('input[type="radio"]');
const citycheck = document.getElementById("citycheck");

const checkbox1 = document.querySelector("#checkbox1");
const conditions = document.getElementById("conditionscheck");

const submit = document.querySelector(".content");
const completionError = document.querySelector("#completionerror");

let first, last, email, quantity, town, conditionAccepted, newsletter;

//Function
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("#" + tag);
  const span = document.querySelector("#" + tag + " +span");
  if (!valid) {
    container.classList.add("error");
    span.classList.add("error-message");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const firstChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    errorDisplay(
      "first",
      "Veuillez entrer 2 caractères ou plus pour le prénom."
    );
    first = null;
  } else if (
    !value.match(
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    )
  ) {
    errorDisplay("first", "Le prénom doit contenir des lettres uniquement.");
    first = null;
  } else {
    errorDisplay("first", "", true);
    first = value;
  }
};

const lastChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    errorDisplay("last", "Veuillez entrer 2 caractères ou plus pour le nom.");
    last = null;
  } else if (
    !value.match(
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    )
  ) {
    errorDisplay("last", "Le nom doit contenir des lettres uniquement.");
    last = null;
  } else {
    errorDisplay("last", "", true);
    last = value;
  }
};

const emailChecker = (value) => {
  if (
    !value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    errorDisplay("email", "Le Mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const tournamentQuantityChecker = (value) => {
  if (!value.match(/^\d+$/)) {
    errorDisplay("quantity", "Vous devez entrer un nombre entier");
    quantity = null;
  } else {
    errorDisplay("quantity", "", true);
    quantity = value;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstChecker(e.target.value);
        break;
      case "last":
        lastChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "quantity":
        tournamentQuantityChecker(e.target.value);
        break;
      case "location6":
        console.log("hello");
      default:
        null;
    }
  });
});

cities.forEach((city) => {
  city.addEventListener("input", (e) => {
    let cityValue;
    if (city.checked) {
      cityValue = city.value;
    }
    if (cityValue) {
      citycheck.textContent = "";
      town = e.target.value;
    }
  });
});

checkbox1.addEventListener("input", (e) => {
  if (checkbox1.checked) {
    conditionAccepted = checkbox1.value;
  }
  if (conditionAccepted) {
    conditions.textContent = "";
    conditionAccepted = e.target.value;
  }
});

const checkbox2 = document.querySelector("#checkbox2");
checkbox2.addEventListener("input", (e) => {
  if (checkbox2.checked) {
    newsletter = checkbox2.value;
  }
});

submit.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!town) {
    citycheck.classList.remove("display");
  }
  if (!conditionAccepted) {
    conditions.classList.remove("display");
  }
  if (first && last && email && quantity && town && conditionAccepted) {
    completionError.classList.add("display");
    const data = {
      first: first,
      last: last,
      email: email,
      quantity: quantity,
      town: town,
      conditionAccepted: conditionAccepted,
      newsletter: newsletter,
    };

    console.log(data);
    inputs.forEach((input) => (input.value = ""));
    cities.forEach((city) => (city.checked = false));
    checkbox1.checked = false;
    checkbox2.checked = false;
    first = null;
    last = null;
    email = null;
    quantity = null;
    town = null;
    conditionAccepted = null;
    newletter = null;
  } else {
    completionError.classList.remove("display");
  }
});

//End of work

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//Work of Herve Hamann 2

// close modal event
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});

//End of work
