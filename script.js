document.addEventListener('DOMContentLoaded', function() {
    console.log('Club 77 Website Loaded');
});

function showModal(type) {
    document.getElementById("myModal").style.display = "block";
    let title = document.getElementById("modalTitle");
    let content = document.getElementById("modalContent");

    if (type === 'VIP') {
        title.innerHTML = "VIP";
        content.innerHTML = `
            <li>Exclusive VIP access to all areas</li>
            <li>Free drinks and cocktails</li>
            <li>Private table service</li>
            <li>Meet and greet with top DJs</li>
        `;
    } else if (type === 'Standard') {
        title.innerHTML = "Standard";
        content.innerHTML = `
            <li>Standard entry access</li>
            <li>Access to main dancefloor</li>
            <li>Complimentary drink</li>
        `;
    } else if (type === 'Special') {
        title.innerHTML = "Special";
        content.innerHTML = `
            <li>Exclusive access to VIP areas</li>
            <li>Private section for guests</li>
            <li>Top-shelf liquor</li>
        `;
    }
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
