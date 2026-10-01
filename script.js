// Store events
let events = [];

// Store registrations
let registrations = [];

// Create Event
document.getElementById("eventForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;
    let location = document.getElementById("eventLocation").value;
    let description = document.getElementById("eventDescription").value;

    let newEvent = {
        id: Date.now(),
        name: name,
        date: date,
        location: location,
        description: description
    };

    events.push(newEvent);

    document.getElementById("eventMessage").innerText =
        "Event created successfully!";

    document.getElementById("eventForm").reset();

    displayEvents();
    updateEventSelect();
    updateAnalytics();
});


// Display Events
function displayEvents() {

    let eventList = document.getElementById("eventList");

    eventList.innerHTML = "";

    if (events.length === 0) {
        eventList.innerHTML = "<p>No events available.</p>";
        return;
    }

    events.forEach(function(event) {

        let card = document.createElement("div");

        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p><b>Date:</b> ${event.date}</p>
            <p><b>Location:</b> ${event.location}</p>
            <p><b>Description:</b> ${event.description}</p>
            <button onclick="registerForEvent(${event.id})">
                Register
            </button>
        `;

        eventList.appendChild(card);
    });
}


// Update Event Dropdown
function updateEventSelect() {

    let select = document.getElementById("eventSelect");

    select.innerHTML =
        '<option value="">Select an Event</option>';

    events.forEach(function(event) {

        let option = document.createElement("option");

        option.value = event.id;
        option.textContent = event.name;

        select.appendChild(option);
    });
}


// Participant Registration
document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
        document.getElementById("participantName").value;

    let email =
        document.getElementById("participantEmail").value;

    let eventId =
        document.getElementById("eventSelect").value;

    let registration = {

        name: name,
        email: email,
        eventId: eventId
    };

    registrations.push(registration);

    document.getElementById("registrationMessage").innerText =
        "Registration successful!";

    document.getElementById("registrationForm").reset();

    updateAnalytics();
});


// Register button from Event Card
function registerForEvent(eventId) {

    document.getElementById("eventSelect").value = eventId;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}


// Analytics
function updateAnalytics() {

    document.getElementById("totalEvents").innerText =
        events.length;

    document.getElementById("totalParticipants").innerText =
        registrations.length;
}


// Show Events
function showEvents() {

    document.getElementById("events").scrollIntoView({
        behavior: "smooth"
    });
}


// Initial display
displayEvents();
updateAnalytics();