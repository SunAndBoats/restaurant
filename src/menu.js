export default function loadMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
  
    const title = document.createElement('h2');
    title.textContent = 'Our Menu';
  
    const items = [
      {
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh mozzarella, basil, and tomato sauce.',
        price: '€9.50',
      },
      {
        name: 'Spaghetti Carbonara',
        description: 'Spaghetti tossed in a creamy sauce with pancetta and Parmesan.',
        price: '€11.00',
      },
      {
        name: 'Grilled Salmon',
        description: 'Served with lemon butter sauce and seasonal vegetables.',
        price: '€14.50',
      },
      {
        name: 'Tiramisu',
        description: 'Coffee-flavored Italian dessert with mascarpone and cocoa.',
        price: '€6.00',
      },
      {
        name: 'Espresso',
        description: 'Strong and rich Italian coffee.',
        price: '€2.00',
      },
    ];
  
    const list = document.createElement('div');
    list.classList.add('menu-list');
  
    items.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('menu-item');
  
      const itemName = document.createElement('h3');
      itemName.textContent = item.name;
  
      const itemDesc = document.createElement('p');
      itemDesc.classList.add('description');
      itemDesc.textContent = item.description;
  
      const itemPrice = document.createElement('p');
      itemPrice.classList.add('price');
      itemPrice.textContent = item.price;
  
      card.appendChild(itemName);
      card.appendChild(itemDesc);
      card.appendChild(itemPrice);
  
      list.appendChild(card);
    });
  
    menu.appendChild(title);
    menu.appendChild(list);
  
    return menu;
  }
  