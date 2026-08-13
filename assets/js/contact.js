const FORM_URL = "https://docs.google.com/forms/d/1ejtJgrbgl1gDTe-ym2Fbkr_4AZLhBv76lhcMK7k0SgY/formResponse";

const ENTRY_NAME = "entry.819492699";
const ENTRY_EMAIL = "entry.83157207";
const ENTRY_MESSAGE = "entry.1108340479";

const toggle = document.getElementById("contactFormToggle");
const wrapper = document.getElementById("contactFormWrapper");

toggle.addEventListener("click", function(e) {
    e.preventDefault();
    wrapper.classList.toggle("contact-form-visible");
});

const form = document.getElementById("contactForm");
const button = form.querySelector("button");
const status = document.getElementById("contactFormStatus");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    status.className = "form-status";
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

        status.classList.add("success");
        status.textContent = "Thank you! Your message was received.";
        form.reset();

    } catch (err) {
        status.classList.add("error");
        status.textContent = "Sorry, your message could not be sent.";
    } finally {
        button.disabled = false;
        button.textContent = submitCaption;
    }
});
