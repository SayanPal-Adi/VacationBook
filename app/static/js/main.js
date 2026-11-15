
// =====================================
// VACATIONBOOK - MAIN JAVASCRIPT
// =====================================


// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// Set minimum dates for hotel search
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

const today = new Date();
const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

if (checkin && checkout) {
    checkin.min = todayString;
    checkout.min = todayString;

    checkin.addEventListener("change", () => {
        if (!checkin.value) return;

        const nextDay = new Date(checkin.value + "T00:00:00");
        nextDay.setDate(nextDay.getDate() + 1);

        const minimumCheckout = [
            nextDay.getFullYear(),
            String(nextDay.getMonth() + 1).padStart(2, "0"),
            String(nextDay.getDate()).padStart(2, "0")
        ].join("-");

        checkout.min = minimumCheckout;

        if (checkout.value && checkout.value <= checkin.value) {
            checkout.value = "";
        }
    });
}


// Hotel search form
const searchForm = document.getElementById("hotelSearchForm");

if (searchForm) {
    searchForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!searchForm.reportValidity()) return;

        const destination = document.getElementById("destination").value.trim();
        const guests = document.getElementById("guests").value;

        if (checkin.value >= checkout.value) {
            alert("Check-out must be after check-in.");
            return;
        }

        const params = new URLSearchParams({
            destination,
            checkin: checkin.value,
            checkout: checkout.value,
            guests
        });

        // Temporary search destination.
        // We will connect this to the Flask search route later.
        window.location.href = `/search?${params.toString()}`;
    });
}


// Newsletter form
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", event => {
        event.preventDefault();

        const email = newsletterForm.querySelector("input").value.trim();

        if (!email) return;

        newsletterMessage.textContent =
            "Thank you for subscribing to VacationBook!";

        newsletterForm.reset();
    });
}
