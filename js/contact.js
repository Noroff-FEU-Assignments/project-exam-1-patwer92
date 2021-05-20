const contactForm = document.querySelector("#contactForm");

const contactName = document.querySelector("#contactName");
const contactNameError = document.querySelector("#contactNameError");

const contactEmail = document.querySelector("#contactEmail");
const contactEmailError = document.querySelector("#contactEmailError");

const contactMessage = document.querySelector("#contactMessage");
const contactMessageError = document.querySelector("#contactMessageError");

function validateContactForm(event) {

    event.preventDefault();

    if (checkLength(contactName.value, 0) === true) {
        contactNameError.style.display = "none";
    } else {
        contactNameError.style.display = "block";
        return false;
    }

    if (validateContactEmail(contactEmail.value) === true) {
        contactEmailError.style.display = "none";
    } else {
        contactEmailError.style.display = "block";
        return false;
    }

    if (checkLength(contactMessage.value, 9) === true) {
        contactMessageError.style.display = "none";
    } else {
        contactMessageError.style.display = "block";
        return false;
    }

    alert("Your message has been successfully sent.");
    return true;

}

contactForm.addEventListener("submit", validateContactForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateContactEmail(contactEmail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(contactEmail);
    return patternMatches;

}