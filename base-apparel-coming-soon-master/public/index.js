function handleFormSubmit(event) {
    event.preventDefault()

const emailInput = document.getElementById("email")

const isEmailValid = emailInput.value.trim() !== '' && emailInput.validity.valid;

if(isEmailValid) { 
    const emailSpan = document.getElementById('email-span');
    emailSpan.innerText = '';
    alert('Email successfully sent');
    console.log(isEmailValid);
}
if (isEmailValid !== true) {

    const emailLabel = document.getElementById('email-label');
    console.log(emailLabel);
    const emailSpan = document.getElementById('email-span');
    emailSpan.innerText = 'Please provide a valid Email.';
}}

const firstheader= "WE'RE";
const secondheader= "COMING SOON";
const notice= "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals";

document.getElementById("firstheader").innerText = firstheader;
document.getElementById("secondheader").innerText = secondheader;
document.getElementById("notice").innerText = notice;
