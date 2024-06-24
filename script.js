const sellBookBtn = document.getElementById('sellBookBtn');
const buyBookBtn = document.getElementById('buyBookBtn');

sellBookBtn.addEventListener('click', () => {
  window.location.href = 'sellBook.html';
});

buyBookBtn.addEventListener('click', () => {
  window.location.href = 'buyBook.html';
});
