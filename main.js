var formButton = document.getElementById('form_button');
var outputField = document.getElementById('main_section');

formButton.addEventListener('click', displayDogCard)
outputField.addEventListener('click', deleteCard)

function displayDogCard(event) {
  event.preventDefault();
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
      return response.json()
    })
    .then(function(dogPicture) {
      console.log(dogPicture)
      outputField.insertAdjacentHTML('afterbegin',
        `<section class="dog_box">
          <header class="dog_header">
            <img class="header_img" src="./images/star.png" />
            <img class="header_img delete-card" src="./images/delete.png" />
          </header>
          <img src=${dogPicture.message} alt="Random picture of a dog" class="dog_img"/>
        </section>`);
    })
}

function deleteCard(e) {
  if (e.target.classList.contains('delete-card')) {
    e.target.closest('section').remove();
  }
}
