document.getElementById("contactForm") .addEventListener("submit", function(event) 
{
    event.preventDefault(); // Prevent the form from submitting

    const errors = [];


  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const date = document.getElementById("date").value.trim();

  if (name.length <10) errors.push ("Kötelező és legalább 10 karaktert adjon meg!");
  if (address.length < 10) errors.push ("Kötelező és legalább 10 karaktert adjon meg!");
  if (message.length < 10) errors.push ("Kötelező és legalább 10 karaktert adjon meg!"); 
  if (date.length < 10) errors.push ("Kötelező és legalább 10 karaktert adjon meg!"); 

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) errors.push("Kötelező és érvényes e-mail címet adjon meg!"); 

     const errorDiv = document.getElementById("formErrors");

  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");

    } else {
    
    alert("Sikeresen elküldve!");
    document.getElementById("contactForm").reset();
  }
});