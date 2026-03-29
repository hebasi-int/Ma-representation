const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const inputs = bookingForm.querySelectorAll("input[required]");
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "2px solid #e68d8d"; 
            input.style.backgroundColor = "rgba(255, 77, 77, 0.1)"; 
        } else {
            input.style.border = "1px solid #444";
            input.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
        }
    });

    if (valid) {
        alert("Réservation envoyée avec succès ! ✅");
        bookingForm.reset();
    } else {
        alert("Merci de remplir tous les champs obligatoires !");
    }
});