
// Hotel filtering and sorting

const hotelCards = [...document.querySelectorAll(".listing-card")];
const priceFilters = document.querySelectorAll('input[name="price"]');
const typeFilters = document.querySelectorAll('input[name="type"]');
const sortSelect = document.getElementById("sortHotels");
const clearButton = document.getElementById("clearFilters");
const noResults = document.getElementById("noResults");

function updateHotels() {
    const price = document.querySelector('input[name="price"]:checked')?.value || "all";

    const selectedTypes = [...typeFilters]
        .filter(input => input.checked)
        .map(input => input.value);

    hotelCards.forEach(card => {
        const cardPrice = Number(card.dataset.price);
        const cardType = card.dataset.type;

        const matchesPrice = price === "all" || cardPrice < Number(price);
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(cardType);

        card.hidden = !(matchesPrice && matchesType);
    });

    noResults.hidden = hotelCards.some(card => !card.hidden);
}

priceFilters.forEach(input => {
    input.addEventListener("change", updateHotels);
});

typeFilters.forEach(input => {
    input.addEventListener("change", updateHotels);
});

sortSelect.addEventListener("change", () => {
    const sorted = [...hotelCards];

    if (sortSelect.value === "low") {
        sorted.sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
    } else if (sortSelect.value === "high") {
        sorted.sort((a, b) => Number(b.dataset.price) - Number(a.dataset.price));
    }

    sorted.forEach(card => {
        document.getElementById("hotelResults").appendChild(card);
    });

    updateHotels();
});

clearButton.addEventListener("click", () => {
    document.querySelector('input[name="price"][value="all"]').checked = true;
    typeFilters.forEach(input => input.checked = false);
    sortSelect.value = "recommended";

    hotelCards.forEach(card => {
        document.getElementById("hotelResults").appendChild(card);
    });

    updateHotels();
});
