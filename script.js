// 1. Define your menu items in an array of objects
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

// 2. Select the container where cards will live
const menuContainer = document.getElementById('menu-container');

// 3. Function to render the menu
function displayMenu(items) {
  // Clear any existing content
  menuContainer.innerHTML = '';

  items.forEach(item => {
    // Create column wrapper
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4';

    // Create card structure safely
    colDiv.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title h5"></h3>
          <p class="card-text flex-grow-1"></p>
          <p class="fw-bold text-success mb-0 price-tag"></p>
        </div>
      </div>
    `;

    // Populate text safely using textContent to prevent XSS
    colDiv.querySelector('.card-title').textContent = item.title;
    colDiv.querySelector('.card-text').textContent = item.description;
    colDiv.querySelector('.price-tag').textContent = item.price;

    // Append to container
    menuContainer.appendChild(colDiv);
  });
}

// 4. Run function on page load
document.addEventListener('DOMContentLoaded', () => {
  displayMenu(menuItems);
});
// Get the "See the menu" button by its class or href
const menuButton = document.querySelector('header a[href="#menu"]');

if (menuButton) {
  menuButton.addEventListener('click', function(event) {
    // Prevent the instant jump
    event.preventDefault();

    // Smoothly scroll to the menu section
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  });
}