('use strict');
const form = document.querySelector('.page-start__form');
const validationMessage = document.querySelector('.page-start__validation');
const input = document.querySelector('#email');
const addressEmail = document.querySelector('.address-email');
const modal = document.querySelector('.backdrop-modal');
const btnDismissMessage = document.querySelector('.modal__button');

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validation = (element, message) => {
  if (!regexEmail.test(element.value)) {
    message.classList.remove('page-start__validation-valid');
    message.classList.add('page-start__validation-invalid');
    element.classList.remove('page-start__input-valid');
    element.classList.add('page-start__input-invalid');
  } else {
    message.classList.add('page-start__validation-valid');
    message.classList.remove('page-start__validation-invalid');
    element.classList.add('page-start__input-valid');
    element.classList.remove('page-start__input-invalid');
  }
};

const signUp = evt => {
  evt.preventDefault();

  if (regexEmail.test(input.value)) {
    modal.classList.remove('is-hidden');
    addressEmail.innerHTML = `${input.value}`;
  }
};

const dismissMessage = () => {
  modal.classList.add('is-hidden');
  form.reset();
};

input.addEventListener('blur', () => validation(input, validationMessage));
input.addEventListener('input', () => validation(input, validationMessage));
form.addEventListener('submit', signUp);
btnDismissMessage.addEventListener('click', dismissMessage);
