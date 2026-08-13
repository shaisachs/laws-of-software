const FORM_URL = "https://docs.google.com/forms/d/1ejtJgrbgl1gDTe-ym2Fbkr_4AZLhBv76lhcMK7k0SgY/formResponse";

const ENTRY_NAME = "entry.819492699";
const ENTRY_EMAIL = "entry.83157207";
const ENTRY_MESSAGE = "entry.1108340479";

const form = document.getElementById("contactForm");
const button = form.querySelector("button");
const status = document.getElementById("contactFormStatus");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    status.textContent = "";
    button.disabled = true;

    var submitCaption = button.textContent;
    button.textContent = "Sending..."

    const formData = new FormData();
    formData.append(ENTRY_NAME, document.getElementById("name").value);
    formData.append(ENTRY_EMAIL, document.getElementById("email").value);
    formData.append(ENTRY_MESSAGE, document.getElementById("message").value);

    try {
        await fetch(FORM_URL, {
            method: "POST",
            mode: "no-cors",
            body: formData
        });

        status.textContent = "Thank you! Your message was received.";
        form.reset();

    } catch (err) {
        status.textContent = "Sorry, your message could not be sent.";
    } finally {
        button.disabled = false;
        button.textContent = submitCaption;
    }
});
