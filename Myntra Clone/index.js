document.addEventListener('DOMContentLoaded', function() {
    // 1. Search Bar Functionality
    const searchInput = document.querySelector('.search_input');
    const allItemContainers = document.querySelectorAll('.item_container'); // Get all product containers

    searchInput.addEventListener('keyup', function(event) {
        const searchTerm = event.target.value.toLowerCase().trim();

        allItemContainers.forEach(container => {
            const productName = container.querySelector('.sale_item').dataset.name.toLowerCase();
            
            if (productName.includes(searchTerm)) {
                container.classList.remove('hidden');
            } else {
                container.classList.add('hidden');
            }
        });
    });

    // 2. Wishlist Button Functionality
    const wishlistButtons = document.querySelectorAll('.wishlist_btn');

    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemContainer = this.closest('.item_container');
            const productName = itemContainer.querySelector('.sale_item').dataset.name;

            if (this.classList.contains('added')) {
                // Already added, simulate removal
                this.classList.remove('added');
                this.textContent = 'Add to Wishlist';
                console.log(`Removed "${productName}" from wishlist.`);
                alert(`"${productName}" removed from wishlist!`);
            } else {
                // Add to wishlist
                this.classList.add('added');
                this.textContent = 'Added to Wishlist';
                console.log(`Added "${productName}" to wishlist.`);
                alert(`"${productName}" added to wishlist!`);
            }
        });
    });

    // 3. Payment Button Functionality
    const proceedToPaymentBtn = document.getElementById('proceedToPaymentBtn');

    if (proceedToPaymentBtn) {
        proceedToPaymentBtn.addEventListener('click', function() {
            alert('Proceeding to Payment! (This is a simulation)');
            console.log('Payment button clicked.');
            // In a real application, you would redirect to a payment gateway or show a payment form here.
            // window.location.href = '/payment-gateway'; 
        });
    }
});