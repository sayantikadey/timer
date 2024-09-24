document.getElementById('start-timer').addEventListener('click', function() {
    const eventDate = new Date(document.getElementById('event-date').value);
    
    // Check if the selected date is valid
    if (isNaN(eventDate.getTime())) {
        alert('Please select a valid date and time.');
        return;
    }

    const countdownDiv = document.getElementById('countdown');
    countdownDiv.classList.remove('hidden');

    const interval = setInterval(() => {
        const now = new Date();
        const distance = eventDate - now;

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('timer').innerHTML = "Event has passed!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }, 1000);
});

// Function to display the current time
function updateClock() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    document.getElementById('clock').innerText = currentTime;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately

function displayCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    
    document.getElementById('current-date').innerText = formattedDate;
}

// Call the function to display the date when the page loads
window.onload = displayCurrentDate;

