//TODO: capital letter for each classes

//TODO: later make a class out of this
function  displayLightbox(idSelectedMedia) {
  console.log(idSelectedMedia);
  const lightboxModal = document.getElementById('lightbox_modal');
  lightboxModal.style.display = "block";

  const lightbox = document.querySelector('.lightbox');
  lightbox.setAttribute("style", "display:flex");

  let listHtmlMedia = document.querySelectorAll('.lightbox_image > .media_element');
  let listMediaId = [];

  for (let element of listHtmlMedia) {
    listMediaId.push(element.dataset.mediaId);
  }

  let idElementToDisplay = `lightbox_media_${idSelectedMedia}`
  let indexElementToDisplay = listMediaId.findIndex(indexElementToDisplay => indexElementToDisplay === idSelectedMedia);

  let elementToDisplay = document.getElementById(idElementToDisplay);
  elementToDisplay.setAttribute("style", "display:flex");

  const arrowNext = this.document.getElementById(`arrow_next_${idSelectedMedia}`);
  arrowNext.addEventListener('click',()=> {
    this.showNextElement(listMediaId, indexElementToDisplay);
  });

  const arrowPrevious = this.document.getElementById(`arrow_previous_${idSelectedMedia}`);
  arrowPrevious.addEventListener('click', () => {
    this.hideCurrentDisplay(idSelectedMedia);
    this.showPreviousElement(listMediaId, idSelectedMedia);
  });
}

function showNextElement(listMediaId, currentElementId) {
  // TODO: send the element's index directly as a parameter
  // Finding the currentElementId in the list of all media ids and assigning its index in a variable
  let currentElementIndex = listMediaId.findIndex(element => element === currentElementId);
  // Getting the next element's index in the array
  let nextElementIndex = currentElementIndex + 1;
  console.log(nextElementIndex);

  // Activate this to make the previous media disappear
  // let elementCurrentlyDisplayed = document.getElementById(`lightbox_media_${currentElementId}`);
  // elementCurrentlyDisplayed.removeAttribute('style');

  // let idElementToDisplay = `lightbox_media_${listMediaId[element]}`

  // let nextElementToDisplay = document.getElementById(idElementToDisplay);
  // nextElementToDisplay.setAttribute("style", "display:flex");
}

function hideCurrentDisplay(idSelectedMedia) {
  let elementCurrentlyDisplayed = document.getElementById(`lightbox_media_${currentElementId}`);
  elementCurrentlyDisplayed.removeAttribute('style');
}

function showPreviousElement(listMediaId, indexElementToDisplay) {
}

const closeButton = document.getElementById('close_button');
closeButton.addEventListener('click', () => {
  this.closeLightbox()
})

function  closeLightbox() {
  const lightbox = document.getElementById('lightbox_modal');
  lightbox.style.display = "none";
  let lightboxImage = document.querySelectorAll('.lightbox_element');

  for (let element of lightboxImage) {
    element.removeAttribute("style");
  }
}

// TODO: send lightboxHtml here
// TODO: attention pour addEventListenenrs utiliser fonction fléchées

// in classes this.function tend to lose their scope
