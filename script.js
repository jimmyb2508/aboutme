// Submit Function

function userName() {
    const name = document.getElementById("name");
    alert("Your name is: " + name.value);
}

function emailAd() {
    const email = document.getElementById("email");
    alert("Your email address is " + email.value);
}

function message() {
    const message = document.getElementById('message');
    alert("Your message is " + message.value);
}

const submit = document.getElementById("submit");
submit.addEventListener("click", userName);
submit.addEventListener("click", emailAd);
submit.addEventListener("click", message);
