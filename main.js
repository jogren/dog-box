var inputTitle = document.getElementById('form_input-name');
var inputDescription = document.getElementById('form_input-description');
var formButton = document.getElementById('form_button');
var outputField = document.getElementById('main_section');
var inputImage = document.getElementById('form_input-image');

formButton.addEventListener('click', displayDogCard)
outputField.addEventListener('click', deleteCard)

function displayDogCard(event) {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(res) {
      return res.json()
    })
    .then(function(data) {
      outputField.insertAdjacentHTML('afterbegin',
        `<section class="dog_box">
          <header class="dog_header">
            <img class="header_img" src="./images/star.png" />
            <img class="header_img delete-card" src="./images/delete.png" />
          </header>
          <img src=${data} class="dog_img"/>
        </section>`);
    })
}

function deleteCard(e) {
  if (e.target.classList.contains('delete-card')) {
    e.target.closest('section').remove();
  }
}
