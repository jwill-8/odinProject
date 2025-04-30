import menuImage from "./img/food.jpg";

export function toMenu(target) {
  target.innerHTML = `
    <div class="menu-container">
        <div class="menu-image">
            <img src="${menuImage}" alt="DB&G">
        </div>
        <div class="menu-content">
            <h1>MENU</h1>

            <div class="menu-section">
                <h2>STARTERS</h2>
                <ul>
        <li>Hot Wings</li>
        <li>Calamari</li>
        <li>Bang Bang Shrimp</li>
        <li>Nachos</li>
    </ul>
            </div>

            <div class="menu-section">
                <h2>HAND HELDS (1 SIDE)</h2>
                <ul>
        <li>Smash Burger</li>
        <li>Cubano</li>
        <li>Buffalo Fried Chx Sandwhich</li>
        <li>Turkey Club</li>
    </ul>
            </div>

            <div class="menu-section">
                <h2>MAINS (2 SIDES) </h2>
                <ul>
        <li>Ribeye</li>
        <li>Filet</li>
        <li>Salmon</li>
        <li>Fried Shrimp Platter</li>
    </ul>
            </div>

            <div class="menu-section">
                <h2>SIDES</h2>
                 <ul>
        <li>Hand Cut Fries</li>
        <li>Onion Rings</li>
        <li>Mashed</li>
        <li>Daily Veg</li>
        <li>House Salad</li>
        <li>Slaw</li>
    </ul>
            </div>
        </div>
    </div>
    `;
}
