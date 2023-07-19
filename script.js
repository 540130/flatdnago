function handleWatchButtonClick() {
    alert('Thank you for choosing Flatdnago Movies! Enjoy the show!');
  }
  
  
  function handleLoginButtonClick() {
    alert('Login popup: Please sign in to continue.');
  }
  

  function handleFormSubmit(event) {
    event.preventDefault();
    const endpointUrl = 'https://example.com/api/movies';
    const formData = new FormData(form);
    const requestType = form.getAttribute('data-method');
    fetch(endpointUrl, {
      method: requestType,
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        
        console.log('Server Response:', data);
      })
      .catch((error) => {
        
        console.error('Error:', error);
      });
  }
  
  function handleBuyTicketButtonClick() {

    alert('Please click on the "Watch" button to buy tickets for the selected movie.');
  }
  
  
  const watchButton = document.getElementById('watch');
  watchButton.addEventListener('click', handleWatchButtonClick);
  
  const loginButton = document.querySelector('.buttonLogin-popup');
  loginButton.addEventListener('click', handleLoginButtonClick);
  
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.addEventListener('click', handleFormSubmit);
  

  const buyTicketButton = document.querySelector('#purchase-ticket button');
  buyTicketButton.addEventListener('click', handleBuyTicketButtonClick);
  