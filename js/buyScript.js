const buyBooksSection = document.getElementById('buyBooks');

// Retrieve all books stored for selling
const allBooks = Object.keys(localStorage).filter(key => key.startsWith('bookToSell')).map(key => JSON.parse(localStorage.getItem(key)));

// Display all books to buy
allBooks.forEach(bookToSell => {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book');
  bookItem.innerHTML = `
    <h3>${bookToSell.title}</h3>
    <p>By ${bookToSell.author}</p>
    <p>$${bookToSell.price}</p>
    <p>Seller: ${bookToSell.userName}</p>
    <p>Phone Number: ${bookToSell.phoneNumber}</p>
    <p>Address: ${bookToSell.address}</p>
    <p>Year Bought: ${bookToSell.yearBought}</p>
    <img src="${bookToSell.imageBase64}" alt="${bookToSell.title}">
    <button class="confirmPurchaseBtn">Confirm Purchase</button>
  `;
  buyBooksSection.appendChild(bookItem);

  const confirmPurchaseBtn = bookItem.querySelector('.confirmPurchaseBtn');
  confirmPurchaseBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to purchase this book?')) {
      // Remove book from local storage
      localStorage.removeItem(`bookToSell_${bookToSell.title}`);
      // Remove book from display
      buyBooksSection.removeChild(bookItem);
    }
  });
});
