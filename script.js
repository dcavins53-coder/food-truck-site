const menuItems = [
  {
    title: "Crawfish Étouffée",
    description: "Rich, buttery Cajun roux simmered with Louisiana crawfish tails and served over steamed white rice.",
    price: "$15.50"
  },
  {
    title: "Chicken & Sausage Gumbo",
    description: "Dark roux stew loaded with smoked andouille sausage, tender chicken, okra, and file powder.",
    price: "$13.00"
  },
  {
    title: "Praline Beignets",
    description: "Three warm, pillowy French-style doughnuts dusted with powdered sugar and drizzled with pecan praline sauce.",
    price: "$6.50"
  }
];

const menuContainer = document.getElementById('menu-container');

function displayMenu(items) {
  menuContainer.innerHTML = '';

  items.forEach(item => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4';

    colDiv.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title h5"></h3>
          <p class="card-text flex-grow-1"></p>
          <p class="fw-bold text-success mb-0 price-tag"></p>
        </div>
      </div>
    `;

    colDiv.querySelector('.card-title').textContent = item.title;
    colDiv.querySelector('.card-text').textContent = item.description;
    colDiv.querySelector('.price-tag').textContent = item.price;

    menuContainer.appendChild(colDiv);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayMenu(menuItems);
});

const menuButton = document.querySelector('header a[href="#menu"]');

if (menuButton) {
  menuButton.addEventListener('click', function(event) {
    event.preventDefault();

    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  });
}

// Coordinates for Oakdale, LA
const latitude = 30.82;
const longitude = -92.66;

// Part 5: Added &wind_speed_unit=mph and &timezone=auto from the Open-Meteo docs
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`;

async function getWeather() {
  const weatherArea = document.querySelector("#weather");

  // Clear existing content so clicking/running twice doesn't duplicate
  weatherArea.textContent = "";

  // Send the request
  const response = await fetch(url);
  console.log("Status:", response.status);
  const data = await response.json();
  console.log(data);

  // Part 4: Show 3 values on the page using createElement + textContent
  const tempP = document.createElement("p");
  tempP.className = "mb-1";
  tempP.textContent = `Temperature: ${data.current.temperature_2m} ${data.current_units.temperature_2m}`;

  const windP = document.createElement("p");
  windP.className = "mb-1";
  windP.textContent = `Wind Speed: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`;

  const timeP = document.createElement("p");
  timeP.className = "mb-0";
  timeP.textContent = `Time: ${data.current.time} (${data.timezone_abbreviation})`;

  weatherArea.appendChild(tempP);
  weatherArea.appendChild(windP);
  weatherArea.appendChild(timeP);
}

getWeather();