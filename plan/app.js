const priceToggle = document.getElementById("priceToggle");
const planProfessionalpackType = document.querySelector('.planProfessional .packType');
const planProfessionalpackPrice = document.querySelector('.planProfessional .packPrice');
const planProfessionalpackPricespan = document.querySelector('.planProfessional .packPrice span');

priceToggle.addEventListener("change", () => {
    if (priceToggle.checked) {
        planProfessionalpackType.style.display = "block"; // Show the element
        planProfessionalpackPrice.innerHTML = '$539.99<span>/yr</span>'; // Update price and span
    } else {
        planProfessionalpackType.style.display = "none"; // Hide the element
        planProfessionalpackPrice.innerHTML = '$49.99<span>/mo</span>'; // Reset price and span
    }
});
