document.addEventListener('DOMContentLoaded', function() {
    console.log('Club 77 Website Loaded');
});

// Funkce pro otevření modálního okna
function openModal(title, price, description) {
    // Nastavení obsahu modálního okna
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-price').textContent = price;
    
    const descriptionList = document.getElementById('modal-description');
    descriptionList.innerHTML = ''; // Vymazání předchozího seznamu
    description.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        descriptionList.appendChild(listItem);
    });

    // Zobrazí modální okno
    document.getElementById('myModal').style.display = 'block';
}

// Funkce pro zavření modálního okna
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
