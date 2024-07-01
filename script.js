document.addEventListener("DOMContentLoaded", function() {
    console.log("Nomad website is ready!");
    // Additional interactivity can be added here
});
document.getElementById('adventure-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const travelDate = document.getElementById('travel-date').value;
    const destination = document.getElementById('destination').value;
    
    // Static list of customers for demonstration purposes
    const customers = [
        { name: 'John Doe', destination: 'Paris', date: '2024-07-15' },
        { name: 'Jane Smith', destination: 'London', date: '2024-07-20' },
        { name: 'Alice Johnson', destination: 'New York', date: '2024-07-22' },
        { name: 'Bob Brown', destination: 'Paris', date: '2024-07-15' }
    ];
    
    const filteredCustomers = customers.filter(customer => 
        customer.destination.toLowerCase() === destination.toLowerCase() && 
        customer.date === travelDate
    );
    
    const customerList = document.getElementById('customer-list-ul');
    customerList.innerHTML = '';
    
    if (filteredCustomers.length > 0) {
        filteredCustomers.forEach(customer => {
            const li = document.createElement('li');
            li.textContent = `${customer.name} is traveling to ${customer.destination} on ${customer.date}`;
            customerList.appendChild(li);
        });
        document.getElementById('customer-list').style.display = 'block';
    } else {
        const li = document.createElement('li');
        li.textContent = 'No companions found for your selected date and destination.';
        customerList.appendChild(li);
        document.getElementById('customer-list').style.display = 'block';
    }
});
// List of video files
const videoFiles = [
    'background-video/video1.mp4',
    'background-video/video2.mp4',
    'background-video/video3.mp4',
    'background-video/video4.mp4',
    'background-video/video5.mp4'
];

// Function to get a random video file from the list
function getRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videoFiles.length);
    return videoFiles[randomIndex];
}

// Set the random video as the background video source
const backgroundVideo = document.getElementById('background-video');
backgroundVideo.src = getRandomVideo();


// Example mock data (replace with actual data fetching logic)
const companionsData = [
    { id: 1, name: 'John Doe', age: 28, rating: 4.5 },
    { id: 2, name: 'Jane Smith', age: 35, rating: 4.8 },
    { id: 3, name: 'Alice Johnson', age: 30, rating: 4.2 }
];

const findCompanionButton = document.getElementById('find-companion');
const companionList = document.getElementById('companion-list');

findCompanionButton.addEventListener('click', () => {
    // Clear previous companion list
    companionList.innerHTML = '';

    // Display companions
    companionsData.forEach(companion => {
        const companionElement = document.createElement('div');
        companionElement.classList.add('companion');
        companionElement.innerHTML = `
            <p>Name: ${companion.name}</p>
            <p>Age: ${companion.age}</p>
            <p>Rating: ${companion.rating}</p>
            <button class="connect-btn" data-id="${companion.id}">Connect</button>
        `;
        companionList.appendChild(companionElement);
    });
});


companionList.addEventListener('click', (event) => {
    if (event.target.classList.contains('connect-btn')) {
        const companionId = event.target.getAttribute('data-id');
        alert(`Connect with companion ${companionId}`); // Replace with your logic
    }
});
