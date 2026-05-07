const button = document.getElementById("viewRoomsBtn");

button.addEventListener("click", function () {

    const roomsSection = document.getElementById("rooms");

    roomsSection.scrollIntoView({
        behavior: "smooth"
    });

});

