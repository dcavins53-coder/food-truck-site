
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
const colDiv = document.createElement('div');
colDiv.className = 'col-md-4';