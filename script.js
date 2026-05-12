const button = document.getElementById("viewRoomsBtn");

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

        `;

        roomsContainer.appendChild(card);

    });

}

displayRoomTypes()
