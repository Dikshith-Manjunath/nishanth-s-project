const sellBookForm = document.getElementById('sellBookForm');

sellBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('sellTitle').value;
  const author = document.getElementById('sellAuthor').value;
  const price = document.getElementById('sellPrice').value;
  const userName = document.getElementById('sellUserName').value;
  const phoneNumber = document.getElementById('sellPhoneNumber').value;
  const address = document.getElementById('sellAddress').value;
  const imageFile = document.getElementById('sellImage').files[0];
  const yearBought = document.getElementById('sellYear').value;

  // Convert image to base64 string
  const reader = new FileReader();
  reader.readAsDataURL(imageFile);
  reader.onload = () => {
    const imageBase64 = reader.result;

    // Generate unique key for each book using timestamp
    const key = `bookToSell_${Date.now()}`;

    const bookDetails = {
      title,
      author,
      price,
      userName,
      phoneNumber,
      address,
      imageBase64,
      yearBought
    };
    localStorage.setItem(key, JSON.stringify(bookDetails));

    // Redirect back to homepage
    window.location.href = 'index.html';
  };
});
