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

// Funkce pro zobrazení modálního okna pro ceník
function showModal(type) {
    document.getElementById("myModal").style.display = "block";
    let title = document.getElementById("modal-title");
    let content = document.getElementById("modal-description");
    
    if(type === 'VIP') {
        title.textContent = "VIP";
        content.innerHTML = `
            <li>Exclusive VIP access to all areas</li>
            <li>Free drinks and cocktails</li>
            <li>Private table service</li>
            <li>Meet and greet with top DJs</li>
        `;
    } else if(type === 'Standard') {
        title.textContent = "Standard";
        content.innerHTML = `
            <li>Access to main floor</li>
            <li>Standard drink options</li>
            <li>Regular seating</li>
        `;
    } else {
        title.textContent = "Special";
        content.innerHTML = `
            <li>Priority access</li>
            <li>Free drinks</li>
            <li>Meet with select DJs</li>
        `;
    }
}

// Funkce pro zavření modálního okna
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
