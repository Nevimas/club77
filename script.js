function showModal(package) {
    const modal = document.getElementById('modal');
    const packageInfo = document.getElementById('package-info');
    let content;

    if (package === 'VIP') {
        content = `
            <li>Exclusive access to the VIP Lounge</li>
            <li>Priority entrance</li>
            <li>Premium drink options</li>
            <li>Private performances</li>
        `;
    } else if (package === 'Regular') {
        content = `
            <li>General access to the club</li>
            <li>Variety of drinks</li>
            <li>Live entertainment</li>
            <li>Access to all club areas</li>
        `;
    }

    packageInfo.innerHTML = content;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}
