
const destinationDatabase = [
    {
        name: "Sikkim, India",
        climate: "cold",
        minBudget: 25000,
        maxBudget: 40000,
        image: "images/Sikkim.jpg",
        description: "Himalayan paradise with monasteries.",
        bestTime: "March to May",
        popularFor: "Adventure, Culture"
    },
    {
        name: "Cox's Bazar, Bangladesh",
        climate: "warm",
        minBudget: 10000,
        maxBudget: 25000,
        image: "images/COX.jpeg",
        description: "World's longest natural sea beach.",
        bestTime: "October to March",
        popularFor: "Relax, Family"
    },
    {
        name: "Saint Martin's Island",
        climate: "warm",
        minBudget: 8000,
        maxBudget: 20000,
        image: "images/saintmartin.jpg",
        description: "Coral island with crystal clear water.",
        bestTime: "Nov to Feb",
        popularFor: "Honeymoon, Relax"
    },
    {
        name: "Kyoto, Japan",
        climate: "moderate",
        minBudget: 80000,
        maxBudget: 150000,
        image: "images/kyoto_japan.jpg",
        description: "Ancient temples and tradition.",
        bestTime: "Spring & Autumn",
        popularFor: "Culture"
    },
    {
        name: "Sundarbans, Bangladesh",
        climate: "moderate",
        minBudget: 12000,
        maxBudget: 25000,
        image: "images/sundarban_img.jpg",
        description: "Largest mangrove forest and Royal Bengal Tigers.",
        bestTime: "Nov to Feb",
        popularFor: "Adventure, Wildlife"
    },
    {
        name: "Sylhet, Bangladesh",
        climate: "moderate",
        minBudget: 7000,
        maxBudget: 18000,
        image: "images/sylhet.jpg",
        description: "Tea gardens and waterfalls.",
        bestTime: "Rainy Season & Winter",
        popularFor: "Nature, Family"
    },
    {
        name: "Bandarban, Bangladesh",
        climate: "moderate",
        minBudget: 10000,
        maxBudget: 25000,
        image: "images/Bandarban.jpg",
        description: "Hill tracts with tribal culture.",
        bestTime: "Oct to March",
        popularFor: "Adventure, Hiking"
    },
    {
        name: "Dubai, UAE",
        climate: "warm",
        minBudget: 70000,
        maxBudget: 200000,
        image: "images/Dubai.jpg",
        description: "Ultra-modern city with desert safari.",
        bestTime: "Nov to March",
        popularFor: "Luxury, Shopping"
    },
    {
        name: "Kuakata, Bangladesh",
        climate: "moderate",
        minBudget: 6000,
        maxBudget: 15000,
        image: "images/kuakata.jpg",
        description: "Daughter of Sea with sunrise views.",
        bestTime: "Oct to March",
        popularFor: "Beach, Nature"
    },
    {
        name: "Nepal",
        climate: "cold",
        minBudget: 30000,
        maxBudget: 60000,
        image: "images/nepal.jpg",
        description: "Mount Everest and mountains.",
        bestTime: "Oct to Dec",
        popularFor: "Adventure"
    }
];

function recommend() {
    const budget = parseInt(document.getElementById("budget").value) || 0;
    const climate = document.getElementById("climate").value;
    const activity = document.getElementById("activity").value;
    const month = document.getElementById("month").value;


    let matches = destinationDatabase.filter(place => {
        return budget >= place.minBudget && budget <= place.maxBudget && place.climate === climate;
    });

    if (matches.length === 0) {
        matches = destinationDatabase.filter(place => {
            return budget >= place.minBudget && place.climate === climate;
        });
    }

    if (matches.length === 0) {
        matches = destinationDatabase.filter(place => budget >= place.minBudget);
    }

    let selectedPlace;
    
    if (matches.length === 0) {
    
        selectedPlace = destinationDatabase[1]; // Cox's Bazar
        alert("Budget is tight! We recommend Cox's Bazar.");
    } else {
        
        selectedPlace = matches.reduce((prev, current) => {
            const prevMid = (prev.minBudget + prev.maxBudget) / 2;
            const currentMid = (current.minBudget + current.maxBudget) / 2;
            const prevDiff = Math.abs(budget - prevMid);
            const currentDiff = Math.abs(budget - currentMid);
            return (currentDiff < prevDiff) ? current : prev;
        });
    }

    
    localStorage.setItem("recommended", selectedPlace.name);
    localStorage.setItem("travelMonth", month);

    // Redirect to result page
    location.href = "result.html";
}

const colorBtn = document.querySelector(".color-button");
if (colorBtn) {
    const colors = ["red", "blue", "hotpink", "yellow", "orange", "green", "tomato", "purple"];
    let i = 0;
    colorBtn.onclick = () => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    };
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        location.href = "index.html";
    }
}