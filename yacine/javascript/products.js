const productsContainer = document.getElementById("productsContainer");

function displayTrips(tripsArray) {

    productsContainer.innerHTML = "";

    tripsArray.forEach(trip => {

        productsContainer.innerHTML += `
        <div class="product-card">
            <img src="${trip.image}" alt="${trip.name}">

            <div class="product-info">
                <h3>${trip.name}</h3>
                <p>${trip.description}</p>
                <p><strong>$${trip.price}</strong></p>

                <button onclick="bookTrip('${trip.name}')">
                    Book Now
                </button>
            </div>
        </div>
        `;
    });
}

function filterTrips(category) {

    if(category === "All") {
        displayTrips(trips);
    }
    else {

        const filteredTrips = trips.filter(trip => {
            return trip.category === category;
        });

        displayTrips(filteredTrips);
    }
}

function bookTrip(tripName) {

    localStorage.setItem("selectedTrip", tripName);

    window.location.href = "booking.html";
}

// Display all trips when page loads

displayTrips(trips);
