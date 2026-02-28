document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');

    // Affiche la popup quand on clique sur "Commander"
    orderButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    // Cache la popup quand on clique sur "Fermer"
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Optionnel : Cache la popup si l'utilisateur clique en dehors de la boîte de dialogue
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
