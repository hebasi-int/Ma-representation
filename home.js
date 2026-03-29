window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".car-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    const current = document.querySelector(".filters .active");
    if (current) current.classList.remove("active");

    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-cat");

    cards.forEach(card => {
      if (filterValue === "all") {
        card.style.display = "flex";
      } else if (card.classList.contains(filterValue)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });

  });
});
function openWhatsApp() {
  let phone = "212629790793"; 
  let message = "Bonjour, je veux vous contacter";

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
