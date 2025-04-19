export default function loadHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('tab');
    homeDiv.innerHTML = `
        <h1>Welcome to My Restaurant</h1>
        <p>Enjoy the best food in town!</p>
    `;
    return homeDiv;
}
