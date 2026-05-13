const button = document.getElementById("viewRoomsBtn");
const modal = document.getElementById("roomModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const bookings = [];

button.addEventListener("click", function () {

    const roomsSection = document.getElementById("rooms");

    roomsSection.scrollIntoView({
        behavior: "smooth"
    });

});
const roomTypes = [

    {
        type: "Single Room",

        images: [
            "images/single1.webp",
            "images/single2.webp",
            "images/single3.webp",
            "images/single4.webp"
        ],

        price: "Ksh 12,000/month",

        description: "Perfect for students and young professionals.",

        available: 28,

        total: 50
    },

    {
        type: "Two Bedroom",

        images: [
            "images/double1.webp",
            "images/double2.webp",
            "images/double3.webp",
            "images/double4.webp"
        ],

        price: "Ksh 25,000/month",

        description: "Ideal for small families and roommates.",

        available: 15,

        total: 50
    }

];
const roomsContainer = document.querySelector(".rooms-container");

function displayRoomTypes() {

    roomTypes.forEach(room => {

        const card = document.createElement("div");

        card.classList.add("room-card");
        let imagesHTML = "";

        room.images.forEach(image => {

        imagesHTML += `
        <img src="${image}" alt="${room.type}">
        `;

});
        card.innerHTML = `

    <div class="image-grid">
        ${imagesHTML}
    </div>

    <h3>${room.type}</h3>

    <p>${room.description}</p>

    <p><strong>Rent:</strong> ${room.price}</p>

    <p class="available">
        Available: ${room.available}/${room.total}
    </p>

    <button class="details-btn">
        View Details
    </button>

`;
const detailsButton = card.querySelector(".details-btn");

detailsButton.addEventListener("click", function () {

modal.style.display = "flex";

let modalImages = "";

room.images.forEach(image => {

    modalImages += `
        <img src="${image}" alt="${room.type}">
    `;
});

modalBody.innerHTML = `

    <h2>${room.type}</h2>

    <div class="image-grid">
        ${modalImages}
    </div>

    <p>${room.description}</p>

    <p><strong>Rent:</strong> ${room.price}</p>

    <p>
        Available Rooms:
        ${room.available}/${room.total}
    </p>
    <form class="booking-form">

    <h3>Book This Room Type</h3>

    <input type="text" id="fullName" placeholder="Full Name" required>

    <input type="tel" id="phoneNumber" placeholder="Phone Number" required>

    <input type="date" id="moveInDate" required>

    <button type="submit">
        Book Now
    </button>

</form>

`;
const bookingForm = modalBody.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName =
    document.getElementById("fullName").value;

    const phoneNumber =
    document.getElementById("phoneNumber").value;

    const moveInDate =
    document.getElementById("moveInDate").value;
    const booking = {

    roomType: room.type,

    name: fullName,

    phone: phoneNumber,

    moveIn: moveInDate

};
bookings.push(booking); 
console.log(bookings);
alert("Booking submitted successfully!");

});


});
        roomsContainer.appendChild(card);

    });

}


displayRoomTypes()
closeModal.addEventListener("click", function () {

    modal.style.display = "none";

});

