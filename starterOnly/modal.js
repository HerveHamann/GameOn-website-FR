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

const checkbox = document.querySelectorAll('input[type="checkbox]');

//Function
let first, last, email, quantity;

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
  if (!value.match(/^[+](0|1|2|3|4|5|6)$/)) {
    errorDisplay("quantity", "Vous devez entrer un nombre entier");
  } else {
    errorDisplay("quantity", "", true);
  }
};

const radioBtnChecked = (value) => {};
const conditionCaseChecked = (value) => {};
const newsletterChecker = (value) => {};

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
      default:
        null;
    }
  });
});

cities.forEach((city) => {
  city.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
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
