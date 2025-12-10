
const fullDestinationDatabase = [
    {
        name: "Sikkim, India",
        image: "images/Sikkim.jpg",
        description: "Himalayan paradise with monasteries and trekking.",
        bestTime: "March to June & September to November",
        averageCost: "৳25,000 - ৳40,000",
        travelDuration: "5-7 days",
        popularFor: "Trekking, Monasteries, Mountain Views, Wildlife"
    },
    {
        name: "Cox's Bazar, Bangladesh",
        image: "images/COX.jpeg",
        description: "World's longest natural sea beach with relaxing views.",
        bestTime: "October to March",
        averageCost: "৳10,000 - ৳25,000",
        travelDuration: "3-5 days",
        popularFor: "Beach, Sunset, Seafood, Water Sports"
    },
    {
        name: "Saint Martin's Island, Bangladesh",
        image: "images/saintmartin.jpg",
        description: "Beautiful coral island with crystal-clear water.",
        bestTime: "November to February",
        averageCost: "৳8,000 - ৳20,000",
        travelDuration: "2-4 days",
        popularFor: "Beach, Coral, Relaxation, Honeymoon"
    },
    {
        name: "Kyoto, Japan",
        image: "images/kyoto_japan.jpg",
        description: "Ancient temples, gardens, and traditional Japanese culture.",
        bestTime: "March to May & October to November",
        averageCost: "৳80,000 - ৳150,000",
        travelDuration: "4-6 days",
        popularFor: "Temples, Culture, Cherry Blossoms"
    },
    {
        name: "Sundarbans, Bangladesh",
        image: "images/sundarban_img.jpg",
        description: "World’s largest mangrove forest and Royal Bengal Tigers.",
        bestTime: "November to February",
        averageCost: "৳12,000 - ৳25,000",
        travelDuration: "2-4 days",
        popularFor: "Wildlife, Forest, River Safari"
    },
    {
        name: "Sylhet, Bangladesh",
        image: "images/sylhet.jpg",
        description: "Tea gardens, waterfalls, and a peaceful natural environment.",
        bestTime: "October to March",
        averageCost: "৳7,000 - ৳18,000",
        travelDuration: "2-4 days",
        popularFor: "Nature, Tea Gardens, Waterfalls"
    },
    {
        name: "Bandarban, Bangladesh",
        image: "images/Bandarban.jpg",
        description: "Hill tracts with tribal culture and scenic views.",
        bestTime: "October to March",
        averageCost: "৳10,000 - ৳25,000",
        travelDuration: "3-5 days",
        popularFor: "Adventure, Hills, Culture"
    },
    {
        name: "Dubai, UAE",
        image: "images/Dubai.jpg",
        description: "Ultra-modern city with skyscrapers and desert safari.",
        bestTime: "November to March",
        averageCost: "৳70,000 - ৳200,000",
        travelDuration: "5-7 days",
        popularFor: "Luxury, Shopping, Desert Safari"
    },
    {
        name: "Kuakata, Bangladesh",
        image: "images/kuakata.jpg",
        description: "Daughter of the sea, famous for sunrise and sunset views.",
        bestTime: "October to March",
        averageCost: "৳6,000 - ৳15,000",
        travelDuration: "2-3 days",
        popularFor: "Beach, Sunrise, Sunset"
    },
    {
        name: "Nepal",
        image: "images/nepal.jpg",
        description: "Home of Mt. Everest and a paradise for trekkers.",
        bestTime: "March to May & September to November",
        averageCost: "৳30,000 - ৳60,000",
        travelDuration: "5-7 days",
        popularFor: "Mountains, Adventure, Trekking"
    }
];

const clothingRecommendations = {
    winter: [
        "Heavy sweaters & jackets",
        "Thermal innerwear",
        "Warm gloves & socks",
        "Woolen cap",
        "Waterproof boots"
    ],
    summer: [
        "Light cotton clothing",
        "Sun hat",
        "Sunglasses",
        "Walking shoes",
        "Swimwear"
    ],
    monsoon: [
        "Waterproof jacket",
        "Quick-dry clothes",
        "Waterproof sandals",
        "Umbrella",
        "Mosquito repellent"
    ],
    spring: [
        "Light layers",
        "Comfortable shoes",
        "Light jacket",
        "Sunglasses"
    ],
    autumn: [
        "Medium-weight clothing",
        "Cardigan / light sweater",
        "Comfortable shoes"
    ]
};

function getSeason(month) {
    const seasons = {
        winter: ["december", "january", "february"],
        spring: ["march", "april", "may"],
        summer: ["june", "july", "august"],
        autumn: ["september", "october", "november"]
    };

    month = month.toLowerCase();

    for (const season in seasons) {
        if (seasons[season].includes(month)) return season;
    }
    return "summer";
}

const destinationName = localStorage.getItem("recommended");
const travelMonth = localStorage.getItem("travelMonth") || "january";

// find destination in full list
let data = fullDestinationDatabase.find(d => d.name === destinationName);

// fallback
if (!data) {
    data = {
        name: destinationName || "Destination Not Found",
        image: "images/default.jpg",
        description: "A wonderful travel destination awaits you!",
        bestTime: "Year-round",
        averageCost: "৳20,000 - ৳50,000",
        travelDuration: "3-6 days",
        popularFor: "Adventure, Culture, Relaxation"
    };
}

document.getElementById("destinationName").textContent = data.name;
document.getElementById("destinationImage").src = data.image;
document.getElementById("destinationDescription").textContent = data.description;
document.getElementById("bestTime").textContent = data.bestTime;
document.getElementById("averageCost").textContent = data.averageCost;
document.getElementById("travelDuration").textContent = data.travelDuration;
document.getElementById("popularFor").textContent = data.popularFor;
document.getElementById("selectedMonth").textContent =
    travelMonth.charAt(0).toUpperCase() + travelMonth.slice(1);

const season = getSeason(travelMonth);
const seasonClothes = clothingRecommendations[season] || clothingRecommendations.summer;

let html = `
<p>You are traveling in <b>${season}</b> season. Here are your essential packing tips:</p>
<ul>
`;

seasonClothes.forEach(item => html += `<li>${item}</li>`);
html += "</ul>";

document.getElementById("clothingTips").innerHTML = html;

function goBack() { location.href = "recommend.html"; }
function goHome() { location.href = "index.html"; }

window.goBack = goBack;
window.goHome = goHome;

// Handle image load error
document.getElementById("destinationImage").onerror = function() {
    this.src = "images/default.jpg";
};