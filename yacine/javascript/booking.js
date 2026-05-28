const bookingForm = document.getElementById("bookingForm");

if(bookingForm) {

    const selectedTrip = localStorage.getItem("selectedTrip");

    if(selectedTrip) {
        document.getElementById("destination").value = selectedTrip;
    }

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const traveler = document.getElementById("traveler").value.trim();
        const destination = document.getElementById("destination").value;
        const travelDate = document.getElementById("travelDate").value;
        const travelersCount = document.getElementById("travelersCount").value;

        const message = document.getElementById("bookingMessage");

        if(traveler === "" || destination === "" || travelDate === "" || travelersCount === "") {

            message.textContent = "Please fill all fields.";
            message.style.color = "red";
            return;
        }

        const selectedDate = new Date(travelDate);
        const today = new Date();

        if(selectedDate <= today) {

            message.textContent = "Travel date must be in the future.";
            message.style.color = "red";
            return;
        }

        const booking = {
            traveler,
            destination,
            travelDate,
            travelersCount
        };

        localStorage.setItem("booking", JSON.stringify(booking));

        message.textContent = "Reservation successful! 🚀";
        message.style.color = "lightgreen";

        bookingForm.reset();
    });
}
