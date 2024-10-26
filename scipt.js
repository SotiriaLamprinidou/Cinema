document.getElementById("searchForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the user input values
    const location = document.getElementById("location").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;

    // Simulate hotel search results (this can be replaced with an actual API call)
    const hotels = [
        { name: "Hotel Sunshine", location: "Miami", price: 150 },
        { name: "Ocean View Resort", location: "Miami", price: 200 },
        { name: "City Center Inn", location: "Miami", price: 120 },
    ];

    // Clear previous results
    const hotelList = document.getElementById("hotelList");
    hotelList.innerHTML = "";

    // Display hotels that match the location (this is just for demonstration)
    const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase() === location.toLowerCase());

    if (filteredHotels.length > 0) {
        filteredHotels.forEach(hotel => {
            const hotelDiv = document.createElement("div");
            hotelDiv.innerHTML = `<h3>${hotel.name}</h3><p>Price: $${hotel.price} per night</p>`;
            hotelList.appendChild(hotelDiv);
        });
    } else {
        hotelList.innerHTML = "<p>No hotels found for this location.</p>";
    }
};
