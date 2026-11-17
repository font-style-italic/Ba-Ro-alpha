// main.js file
// // js/main.js
//Contact page.js section 

//This is the Baro address that we will see in the Form
const TO_ADDRESS = "custserv@baro.com.ph";
const form = document.querySelector("#contact-form");
const popupOverlay = document.querySelector("#popup-overlay");
const popupBackBtn = document.querySelector("#popup-back-btn);

function buildMailto() {
  const name = document.querySelector("#contact-name").value;
  const email = document.querySelector("#contact-email").value;
  const topic = document.querySelector("#contact-topic").value;
  const message = document.querySelector("#contact-message").value;

  const subject = "Website message: " + topic;
  const body = 
    "Name: " + name + "\r\n" + 
    "Email: " + email + "\r\n\r\n" +
    message;

 // The layout for our email
  return (
    "mailto:" + TO_ADDRESS + 
    "?subject=" + encodeURIComponent(subject) + 
    "&body=" + encodeURIComponent(body)
  );
}

// The thank you pop up order.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    popupOverlay.style.display = "flex"; popupOverlay.setAttribute("aria-hidden", "false");
    window.location.href = buildMailto();
});

// Clicking "Back" to close Popup
popupBackBtn.addEventListener("click", function () {
  popupOverlay.style.display = "none"; popupOverlay.setAttribute("aria-hidden", "true"); form.reset();
});


//I've only done the JS file for the contact us page haven't really started with the product page
