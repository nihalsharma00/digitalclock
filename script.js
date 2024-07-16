function ClockStart() {
    // assigning real-time values to HTML elements
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Converting 24-hour format to 12-hour format
    let displayHours = hours % 12 || 12; // Handles midnight (0) case as well

    // Updating the time elements
    document.getElementById("hrs").innerText = displayHours;
    document.getElementById("mins").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("secs").innerText = seconds.toString().padStart(2, '0');

    // AM/PM part
    document.getElementById("ampm").innerText = hours >= 12 ? "PM" : "AM";

    // Greeting part
    let greeting = document.getElementById("greeting");
    if (hours >= 12 && hours < 16) {
        greeting.innerHTML = "GOOD AFTERNOON!!";
    } else if (hours >= 16 && hours < 20) {
        greeting.innerHTML = "GOOD EVENING!!";
    } else if (hours >= 20 && hours < 24) {
        greeting.innerHTML = "GOOD NIGHT!!";
    } else {
        greeting.innerHTML = "GOOD MORNING!!";
    }
}

// Update the clock every second
setInterval(ClockStart, 1000);

// Initial call to display the clock immediately
ClockStart();

// Event listeners for the button
const button = document.getElementById("button");

button.addEventListener("mouseover", function () {
    button.textContent = "Party Time";
});

button.addEventListener("mouseout", function () {
    button.textContent = "Set Alarm";
});

// Change image and message based on user-selected values
button.addEventListener("click", function () {
    let date = new Date();
    let hours = date.getHours();

    let wakeUp = document.getElementById("wakeUp");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");

    if (parseInt(wakeUp.value) === hours) {
        console.log(wakeUp.value);
        document.getElementById("settime").innerHTML = "GRAB SOME BREAKFAST!";
        document.getElementById("clockimage").src = "./images/Component 30 – 1.svg";
    } else if (parseInt(lunch.value) === hours) {
        document.getElementById("settime").innerHTML = "LET'S HAVE SOME LUNCH!";
        document.getElementById("clockimage").src = "./images/Component 31 GÇô 1.jpg";
    } else if (parseInt(nap.value) === hours) {
        document.getElementById("settime").innerHTML = "GET SOME TEA..!";
        document.getElementById("clockimage").src = "./images/lunch_image.png";
    } else if (parseInt(night.value) === hours) {
        document.getElementById("settime").innerHTML = "GO TO SLEEP!";
        document.getElementById("clockimage").src = "./images/Component 32 GÇô 1.jpg";
    }


let timing = document.getElementsByClassName("timing");
 
console.log(wakeUp.options[wakeUp.selectedIndex].textContent);

timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;

timing[1].innerText = lunch.options[lunch.selectedIndex].text;
timing[2].innerText = nap.options[nap.selectedIndex].text;
timing[3].innerText = night.options[night.selectedIndex].text;
});