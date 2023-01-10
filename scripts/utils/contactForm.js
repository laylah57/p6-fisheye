function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const validationMessage = document.getElementById('validation');
const closeMessage = document.getElementById('backToMenu');

closeMessage.addEventListener('click', closeConfirmation);

function displayConfirmation() {
  validationMessage.style.display = 'flex';
}
function closeConfirmation() {
  validationMessage.style.display = 'none';
}


const formSubmit = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submit-button');


const namePattern = new RegExp(/^[a-zA-Z]{2,}$/);
const emailPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

firstName.addEventListener('input', checkFirstNameValue);
lastName.addEventListener('input', checkLastNameValue);
email.addEventListener('input', checkEmailValue);
textInput.addEventListener('input', getMessage);
formSubmit.addEventListener('submit', submitForm);


firstName.addEventListener('input', toggleSubmitButton);
lastName.addEventListener('input', toggleSubmitButton);
email.addEventListener('input', toggleSubmitButton);


function displayErrorMessage(inputField, errorMessage) {
  inputField.parentElement.setAttribute('data-error-visible', 'true');
  inputField.parentElement.setAttribute('data-error', errorMessage);
};

function toggleValidState(inputField) {
  inputField.parentElement.setAttribute('data-error-visible', 'false');
  inputField.parentElement.setAttribute('data-error', '');
};


function checkInputValue(inputField, inputValue, inputPattern, errorMessage) {
  let isValid = false;
  if(validateInput(inputPattern, inputValue) === false) {
    displayErrorMessage(inputField, errorMessage);
  } else {
    toggleValidState(inputField);
    isValid = true;
  }
  return isValid;
}

// Checks value against RegEx Pattern
function validateInput(regexPattern, inputValue) {
  return regexPattern.test(inputValue);
}

function checkFirstNameValue() {
  return checkInputValue(
    firstName,
    firstName.value,
    namePattern,
    'Il nous faut au moins deux lettres! (Pas de caractères spéciaux)'
  );
}

function checkLastNameValue() {
  return checkInputValue(
    lastName,
    lastName.value,
    namePattern,
    'Il nous faut au moins deux lettres! (Pas de caractères spéciaux)'
  );
}

function checkEmailValue() {
  return checkInputValue(
    email,
    email.value,
    emailPattern,
    'Exemple: toto@tata.titi',
  );
}

function getMessage() {
  return textInput.value;
}

function toggleSubmitButton() {
  if (
    checkFirstNameValue() === true
    && checkLastNameValue() === true
    && checkEmailValue() === true
  ) {
    submitButton.removeAttribute('disabled');
  }
}

function submitForm(submit) {
  submit.preventDefault();
  if (
    checkFirstNameValue() === true
    && checkLastNameValue() === true
    && checkEmailValue() === true
  ){
    console.log(
      'Prénom : ' + firstName.value + '\n' +
      'Nom : ' + lastName.value + '\n' +
      'Email : ' + email.value + '\n' +
      'Message : ' + getMessage()
    )
    closeModal();
    displayConfirmation();
  }
}
