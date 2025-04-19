export default function loadContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab');
    contactDiv.innerHTML = `
        <h1>Contact Us</h1>
        <p>Email: contact@restaurant.com</p>
        <p>Phone: 123-456-7890</p>
    `;
    return contactDiv;
}
