const menuItems = [
  // Set Menu
  {
      id: 1,
      name: "SET A",
      description: "Tomyam Kung (Udang), Telur Kungfu, Ayam Gajus, Kailan Ikan Masin, Ikan Siakap (Aneka Masakan), Nasi Putih x 4, 1 Jug (Tembikai / Oren)",
      price: 148.00
  },
  {
      id: 2,
      name: "SET B",
      description: "Tomyam Seafood, Telur Kungfu, Ayam Paprik, Sayur Campur, Ikan Siakap (Aneka Masakan), Nasi Putih x 4, 1 Jug (Tembikai / Oren)",
      price: 148.00
  },
  {
      id: 3,
      name: "SET C",
      description: "Tomyam Hatyai, Telur Dadar, Ayam Kunyit, Udang Brokoli, Ikan Siakap (Aneka Masakan), Nasi Putih x 4, 1 Jug (Tembikai / Oren)",
      price: 148.00
  },
  
  // Appetizers & Side Dishes
  {
      id: 4,
      name: "Tauhu Bakar",
      price: 8.00
  },
  {
      id: 5,
      name: "Colek Thai",
      price: 15.00
  },
  {
      id: 6,
      name: "Roti Sarang Burung",
      price: 10.00
  },
  {
      id: 7,
      name: "Murtabak Ayam",
      price: 10.00
  },
  {
      id: 8,
      name: "Murtabak Daging",
      price: 10.00
  },
  
  // Tomyam
  {
      id: 9,
      name: "Tomyam Kung (Udang) (M)",
      price: 20.00
  },
  {
      id: 10,
      name: "Tomyam Kung (Udang) (L)",
      price: 50.00
  },
  {
      id: 11,
      name: "Tomyam Seafood (M)",
      price: 20.00
  },
  {
      id: 12,
      name: "Tomyam Seafood (L)",
      price: 50.00
  },
  {
      id: 13,
      name: "Tomyam Hatyai (M)",
      price: 20.00
  },
  {
      id: 14,
      name: "Tomyam Hatyai (L)",
      price: 50.00
  },
  {
      id: 15,
      name: "Tomyam Ayam (Chicken) (M)",
      price: 18.00
  },
  {
      id: 16,
      name: "Tomyam Ayam (Chicken) (L)",
      price: 35.00
  },
  {
      id: 17,
      name: "Tomyam Campur (Mix) (M)",
      price: 28.00
  },
  {
      id: 18,
      name: "Tomyam Campur (Mix) (L)",
      price: 50.00
  },
  
  // Ayam (Chicken)
  {
      id: 19,
      name: "Ayam Sup",
      price: 18.00
  },
  {
      id: 20,
      name: "Ayam Pandan (10pcs)",
      price: 18.00
  },
  {
      id: 21,
      name: "Ayam Masak Merah (M)",
      price: 15.00
  },
  {
      id: 22,
      name: "Ayam Masak Merah (L)",
      price: 38.00
  },
  {
      id: 23,
      name: "Ayam Kunyit (M)",
      price: 15.00
  },
  {
      id: 24,
      name: "Ayam Kunyit (L)",
      price: 38.00
  },
  {
      id: 25,
      name: "Ayam Paprik (M)",
      price: 15.00
  },
  {
      id: 26,
      name: "Ayam Paprik (L)",
      price: 38.00
  },
  {
      id: 27,
      name: "Ayam Gajus (M)",
      price: 16.00
  },
  {
      id: 28,
      name: "Ayam Gajus (L)",
      price: 38.00
  },
  {
      id: 29,
      name: "Ayam Panggang",
      price: 12.00
  },
  
  // Daging (Beef)
  {
      id: 30,
      name: "Daging Merah (M)",
      price: 15.00
  },
  {
      id: 31,
      name: "Daging Merah (L)",
      price: 38.00
  },
  {
      id: 32,
      name: "Daging Kunyit (M)",
      price: 15.00
  },
  {
      id: 33,
      name: "Daging Kunyit (L)",
      price: 38.00
  },
  {
      id: 34,
      name: "Daging Paprik (M)",
      price: 15.00
  },
  {
      id: 35,
      name: "Daging Paprik (L)",
      price: 38.00
  },
  {
      id: 36,
      name: "Daging Serai",
      price: 24.00
  },
  {
      id: 37,
      name: "Daging Goreng Gajus",
      price: 24.00
  },
  {
      id: 38,
      name: "Daging Blackpepper",
      price: 24.00
  },
  
  // Udang (Prawn)
  {
      id: 39,
      name: "Udang Tempura (5pcs)",
      price: 15.00
  },
  {
      id: 40,
      name: "Udang Bawang Putih",
      price: 18.00
  },
  {
      id: 41,
      name: "Udang Paprik",
      price: 20.00
  },
  {
      id: 42,
      name: "Udang Petai",
      price: 20.00
  },
  {
      id: 43,
      name: "Udang Gajus",
      price: 20.00
  },
  {
      id: 44,
      name: "Udang Goreng Gajus",
      price: 20.00
  },
  {
      id: 45,
      name: "Udang Asam Jawa",
      price: 18.00
  },
  {
      id: 46,
      name: "Kung Paprik Heng",
      price: 18.00
  },
  
  // Sotong (Squid)
  {
      id: 47,
      name: "Sotong Tepung (10pcs)",
      price: 18.00
  },
  {
      id: 48,
      name: "Sotong Paprik",
      price: 20.00
  },
  {
      id: 49,
      name: "Sotong Petai",
      price: 20.00
  },
  {
      id: 50,
      name: "Sotong Blackpepper",
      price: 20.00
  },
  
  // Ikan Siakap (Sea Bass Fish)
  {
      id: 51,
      name: "Ikan Siakap - Stim Limau (Half)",
      price: 30.00
  },
  {
      id: 52,
      name: "Ikan Siakap - Kengsom (Half)",
      price: 30.00
  },
  {
      id: 53,
      name: "Ikan Siakap - 3 Rasa",
      price: 60.00
  },
  {
      id: 54,
      name: "Ikan Siakap - Masam Manis",
      price: 60.00
  },
  {
      id: 55,
      name: "Ikan Siakap - Pedas",
      price: 60.00
  },
  {
      id: 56,
      name: "Ikan Siakap - Kerabu Mangga",
      price: 60.00
  },
  {
      id: 57,
      name: "Ikan Siakap - Kerabu Gajus",
      price: 60.00
  },
  
  // Sayur (Vegetables)
  {
      id: 58,
      name: "Sup Sayur",
      price: 15.00
  },
  {
      id: 59,
      name: "Kerabu Mangga (M)",
      price: 18.00
  },
  {
      id: 60,
      name: "Kerabu Mangga (L)",
      price: 38.00
  },
  {
      id: 61,
      name: "Kailan Ikan Masin (M)",
      price: 13.00
  },
  {
      id: 62,
      name: "Kailan Ikan Masin (L)",
      price: 35.00
  },
  {
      id: 63,
      name: "Kangkung Belacan (M)",
      price: 13.00
  },
  {
      id: 64,
      name: "Kangkung Belacan (L)",
      price: 35.00
  },
  {
      id: 65,
      name: "Udang Brokoli (M)",
      price: 13.00
  },
  {
      id: 66,
      name: "Udang Brokoli (L)",
      price: 35.00
  },
  {
      id: 67,
      name: "Sayur Campur (M)",
      price: 13.00
  },
  {
      id: 68,
      name: "Sayur Campur (L)",
      price: 35.00
  },
  
  // Telur (Egg)
  {
      id: 69,
      name: "Telur Mata",
      price: 2.50
  },
  {
      id: 70,
      name: "Telur Dadar",
      price: 8.00
  },
  {
      id: 71,
      name: "Telur Kungfu Crispy",
      price: 8.00
  },
  {
      id: 72,
      name: "Telur Bungkus",
      price: 13.00
  },
  
  // Nasi Goreng & Pad Kra Pao
  {
      id: 73,
      name: "Nasi Goreng Cina",
      price: 15.00
  },
  {
      id: 74,
      name: "Nasi Goreng Tomyam",
      price: 15.00
  },
  {
      id: 75,
      name: "Nasi Goreng Kampung",
      price: 15.00
  },
  {
      id: 76,
      name: "Pad Kra Pao Ayam (Chicken)",
      price: 15.00
  },
  {
      id: 77,
      name: "Pad Kra Pao Daging (Beef)",
      price: 15.00
  },
  
  // Mee (Noodles)
  {
      id: 78,
      name: "Mee Tomyam",
      price: 15.00
  },
  {
      id: 79,
      name: "Mee Ladna",
      price: 15.00
  },
  {
      id: 80,
      name: "Mee Goreng",
      price: 15.00
  },
  {
      id: 81,
      name: "Mee Sup",
      price: 15.00
  },
  
  // Kuetiau (Flat Rice Noodles)
  {
      id: 82,
      name: "Kuetiau Tomyam",
      price: 15.00
  },
  {
      id: 83,
      name: "Kuetiau Ladna",
      price: 15.00
  },
  {
      id: 84,
      name: "Kuetiau Goreng",
      price: 15.00
  },
  {
      id: 85,
      name: "Kuetiau Sup",
      price: 15.00
  },
  
  // Add-ons
  {
      id: 86,
      name: "Nasi Putih",
      price: 3.00
  },
  {
      id: 87,
      name: "Sambal Belacan",
      price: 3.00
  },
  {
      id: 88,
      name: "Set Sambal Belacan",
      price: 4.00
  },
  
  // Desserts
  {
      id: 89,
      name: "Bubur Manis",
      price: 5.00
  },
  {
      id: 90,
      name: "Pulut Mangga",
      price: 8.00
  },
  {
      id: 91,
      name: "Kuih-Muih",
      price: 4.00
  },
  {
      id: 92,
      name: "Lai Chi Kang",
      price: 8.00
  },
  
  // Thai Tea & Special Drinks
  {
      id: 93,
      name: "Teh Ais Tarik",
      price: 8.00
  },
  {
      id: 94,
      name: "Teh Ais Hijau",
      price: 8.00
  },
  {
      id: 95,
      name: "Nescafe Ais Tarik",
      price: 8.00
  },
  {
      id: 96,
      name: "Teh Ais Cincau",
      price: 9.00
  },
  {
      id: 97,
      name: "Teh Hijau Cincau",
      price: 9.00
  },
  {
      id: 98,
      name: "Milo Ais Tabur Special",
      price: 9.00
  },
  {
      id: 99,
      name: "Sirap Bandung Cincau",
      price: 9.00
  },
  
  // Hot Drinks
  {
      id: 100,
      name: "Teh O (Hot)",
      price: 2.50
  },
  {
      id: 101,
      name: "Teh / Teh Tarik (Hot)",
      price: 3.80
  },
  {
    id: 102,
    name: "Teh O Halia (Hot)",
    price: 2.80
},
{
    id: 103,
    name: "Teh Halia (Hot)",
    price: 3.20
},
{
    id: 104,
    name: "Teh O Limau (Hot)",
    price: 3.80
},
{
    id: 105,
    name: "Teh O Lemon (Hot)",
    price: 4.20
},
{
    id: 106,
    name: "Kopi (Hot)",
    price: 2.70
},
{
    id: 107,
    name: "Kopi O (Hot)",
    price: 2.80
},
{
    id: 108,
    name: "Kopi Tarik (Hot)",
    price: 3.80
},
{
    id: 109,
    name: "Nescafe O (Hot)",
    price: 2.80
},
{
    id: 110,
    name: "Nescafe (Hot)",
    price: 3.20
},
{
    id: 111,
    name: "Nescafe Tarik (Hot)",
    price: 3.80
},
{
    id: 112,
    name: "Milo (Hot)",
    price: 3.20
},
{
    id: 113,
    name: "Horlicks (Hot)",
    price: 3.20
},
{
    id: 114,
    name: "Limau (Hot)",
    price: 2.50
},
{
    id: 115,
    name: "Lemon (Hot)",
    price: 4.80
},
{
    id: 116,
    name: "Barli (Barley) (Hot)",
    price: 3.80
},

// Cold Drinks
{
    id: 117,
    name: "Teh O (Cold)",
    price: 3.80
},
{
    id: 118,
    name: "Teh O Limau (Cold)",
    price: 4.00
},
{
    id: 119,
    name: "Teh O Laici (Cold)",
    price: 4.20
},
{
    id: 120,
    name: "Laici (Cold)",
    price: 4.00
},
{
    id: 121,
    name: "Limau (Cold)",
    price: 4.20
},
{
    id: 122,
    name: "Lemon (Cold)",
    price: 5.00
},
{
    id: 123,
    name: "Sirap (Cold)",
    price: 2.50
},
{
    id: 124,
    name: "Sirap Bandung (Cold)",
    price: 4.00
},
{
    id: 125,
    name: "Sirap Laici (Cold)",
    price: 4.20
},
{
    id: 126,
    name: "Sirap Limau (Cold)",
    price: 4.20
},
{
    id: 127,
    name: "Sirap Selasih (Cold)",
    price: 4.20
},
{
    id: 128,
    name: "Barli (Cold)",
    price: 5.00
},
{
    id: 129,
    name: "Milo (Cold)",
    price: 5.00
},
{
    id: 130,
    name: "Horlicks (Cold)",
    price: 5.00
},

// Jug Drinks
{
    id: 131,
    name: "Tembikai (Jug)",
    price: 20.00
},
{
    id: 132,
    name: "Fresh Oren (Jug)",
    price: 20.00
},
{
    id: 133,
    name: "Durian Belanda (Soursop) (Jug)",
    price: 30.00
},
{
    id: 134,
    name: "Sirap Ais (Jug)",
    price: 15.00
},
{
    id: 135,
    name: "Teh O Ais (Jug)",
    price: 16.00
},
{
    id: 136,
    name: "Limau Ais (Jug)",
    price: 15.00
},
{
    id: 137,
    name: "Lemon Ais (Jug)",
    price: 18.00
},
{
    id: 138,
    name: "Plain Water (Jug)",
    price: 3.00
},
// Juices
{
  id: 139,
  name: "Tembikai (Juice)",
  price: 7.00
},
{
  id: 140,
  name: "Tembikai Laici (Juice)",
  price: 8.00
},
{
  id: 141,
  name: "Oren (Juice)",
  price: 7.00
},
{
  id: 142,
  name: "Oren Asamboi (Juice)",
  price: 8.00
},
{
  id: 143,
  name: "Nenas (Juice)",
  price: 7.00
},
{
  id: 144,
  name: "Epal (Juice)",
  price: 7.00
},
{
  id: 145,
  name: "Carrot Susu (Juice)",
  price: 8.00
},
{
  id: 146,
  name: "Kedondong (Juice)",
  price: 8.00
},
{
  id: 147,
  name: "Epal Asamboi (Juice)",
  price: 8.00
},
{
  id: 148,
  name: "Durian Belanda (Soursop) (Juice)",
  price: 9.50
},
{
  id: 149,
  name: "Kedondong Asamboi (Juice)",
  price: 9.50
},
{
  id: 150,
  name: "Epal Durian Belanda (Juice)",
  price: 10.50
},
{
  id: 151,
  name: "Kedondong Durian Belanda (Juice)",
  price: 10.50
}
];

// DOM elements
const orderItemsContainer = document.getElementById('orderItems');
const emptyOrderMessage = document.getElementById('emptyOrder');
const totalAmountElement = document.getElementById('totalAmount');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const clearOrderBtn = document.getElementById('clearOrderBtn');

// Order array to store selected items
let orderItems = [];

// Function to toggle section visibility
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = section.previousElementSibling;
    
    section.classList.toggle('active');
    header.classList.toggle('active');
}

// Function to format set menu description as unordered list
function formatSetMenuDescription(description) {
    if (!description) return '';
    
    // Split the description by commas
    const items = description.split(', ');
    
    // Create an unordered list
    let listHTML = '<ul class="set-menu-list">';
    items.forEach(item => {
        listHTML += `<li>${item}</li>`;
    });
    listHTML += '</ul>';
    
    return listHTML;
}

// Initialize the app
function init() {
    displayMenuItems();
    updateOrderDisplay();
    
    // Event listeners
    placeOrderBtn.addEventListener('click', placeOrder);
    clearOrderBtn.addEventListener('click', clearOrder);
}

// Display menu items by category
function displayMenuItems() {
    // Define category ranges
    const categories = {
        'setMenu': [1, 3],
        'appetizers': [4, 8],
        'tomyam': [9, 18],
        'chicken': [19, 29],
        'beef': [30, 38],
        'prawn': [39, 46],
        'squid': [47, 50],
        'fish': [51, 57],
        'vegetables': [58, 68],
        'egg': [69, 72],
        'rice': [73, 77],
        'noodles': [78, 81],
        'kuetiau': [82, 85],
        'addons': [86, 88],
        'desserts': [89, 92],
        'thaiTea': [93, 99],
        'hotDrinks': [100, 116],
        'coldDrinks': [117, 130],
        'juices': [139, 151],
        'jugDrinks': [131, 138]
    };
    
    // Clear all section contents
    Object.keys(categories).forEach(category => {
        document.getElementById(category).innerHTML = '';
    });
    
    // Populate each section with its items
    menuItems.forEach(item => {
        // Find which category this item belongs to
        let categoryId = null;
        
        for (const [category, range] of Object.entries(categories)) {
            if (item.id >= range[0] && item.id <= range[1]) {
                categoryId = category;
                break;
            }
        }
        
        if (categoryId) {
            const categoryContainer = document.getElementById(categoryId);
            
            const menuItemElement = document.createElement('div');
            menuItemElement.className = 'menu-item';
            
            // Format description as unordered list for set menu items
            let descriptionHTML = '';
            if (item.description) {
                if (categoryId === 'setMenu') {
                    descriptionHTML = formatSetMenuDescription(item.description);
                } else {
                    descriptionHTML = `<div class="menu-item-description">${item.description}</div>`;
                }
            }
            
            menuItemElement.innerHTML = `
                <div class="menu-item-details">
                    <div class="menu-item-name">${item.name}</div>
                    ${descriptionHTML}
                </div>
                <div class="menu-item-price">RM${item.price.toFixed(2)}</div>
                <button class="add-btn" data-id="${item.id}">Add</button>
            `;
            
            categoryContainer.appendChild(menuItemElement);
        }
    });
    
    // Add event listeners to all "Add" buttons
    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', addToOrder);
    });
    
    // Open the first section by default
    toggleSection('setMenu');
}

// Add item to order
function addToOrder(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const menuItem = menuItems.find(item => item.id === itemId);
    
    // Check if item is already in order
    const existingOrderItem = orderItems.find(item => item.id === itemId);
    
    if (existingOrderItem) {
        // Increase quantity if already in order
        existingOrderItem.quantity += 1;
    } else {
        // Add new item to order
        orderItems.push({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            description: menuItem.description,
            quantity: 1,
            isSetMenu: itemId >= 1 && itemId <= 3 // Check if it's a set menu item
        });
    }
    
    updateOrderDisplay();
}

// Update the order display with right-aligned controls
function updateOrderDisplay() {
    if (orderItems.length === 0) {
        emptyOrderMessage.style.display = 'block';
        orderItemsContainer.innerHTML = '';
        orderItemsContainer.appendChild(emptyOrderMessage);
    } else {
        emptyOrderMessage.style.display = 'none';
        orderItemsContainer.innerHTML = '';
        
        orderItems.forEach(item => {
            const orderItemElement = document.createElement('div');
            orderItemElement.className = 'order-item';
            
            // Format description as unordered list for set menu items
            let descriptionHTML = '';
            if (item.isSetMenu && item.description) {
                descriptionHTML = formatSetMenuDescription(item.description);
            }
            
            orderItemElement.innerHTML = `
                <div class="order-item-details">
                    <div class="order-item-name">${item.name}</div>
                    ${descriptionHTML}
                </div>
                <div class="order-item-controls">
                    <div class="order-item-price">RM${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-btn" data-id="${item.id}">✕</button>
                </div>
            `;
            
            orderItemsContainer.appendChild(orderItemElement);
        });
        
        // Add event listeners for quantity buttons and remove buttons
        document.querySelectorAll('.decrease-btn').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        
        document.querySelectorAll('.increase-btn').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }
    
    updateTotal();
}

// Decrease item quantity
function decreaseQuantity(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const orderItem = orderItems.find(item => item.id === itemId);
    
    if (orderItem.quantity > 1) {
        orderItem.quantity -= 1;
    } else {
        // Remove item if quantity becomes 0
        orderItems = orderItems.filter(item => item.id !== itemId);
    }
    
    updateOrderDisplay();
}

// Increase item quantity
function increaseQuantity(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const orderItem = orderItems.find(item => item.id === itemId);
    
    orderItem.quantity += 1;
    updateOrderDisplay();
}

// Remove item from order
function removeItem(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'));
    orderItems = orderItems.filter(item => item.id !== itemId);
    updateOrderDisplay();
}

// Update total amount
function updateTotal() {
    const total = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmountElement.textContent = `RM${total.toFixed(2)}`;
}

// Place order
function placeOrder() {
    if (orderItems.length === 0) {
        alert('Your order is empty. Please add items to your order.');
        return;
    }
    
    const total = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Create order summary
    let orderSummary = "Your Order Summary:\n\n";
    
    orderItems.forEach(item => {
        orderSummary += `${item.quantity}x ${item.name} - RM${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    orderSummary += `\nTotal: RM${total.toFixed(2)}`;
    orderSummary += "\n\nThank you for your order! Your food will be ready soon.";
    
    alert(orderSummary);
    clearOrder();
}

// Clear order
function clearOrder() {
    orderItems = [];
    updateOrderDisplay();
}

// Initialize the app when the page loads
window.addEventListener('DOMContentLoaded', init);