//TODO: capital letter for each classes

//TODO: later make a class out of this
function createLightbox(idSelectedMedia) {
  // Displaying the lightbox
  this.displayLightbox();

  // Catching all the images and video created in createPhotographerView()
  let listHtmlMedia = document.querySelectorAll('.lightbox_image > .media_element'); // returns an array

  // Preparing an array to store all the elements' id numbers
  let listMediaId = [];

  // Looping through the list of images and video elements from listHtmlMedia
  for (let element of listHtmlMedia) {
    // Filling in the array with the elements' id numbers
    listMediaId.push(element.dataset.mediaId);
  }


  // Getting the selected media's Index
  // let elementIndexNumber = listMediaId.findIndex(element => element == idSelectedMedia);
  let i = 0;
  console.log(i);

  this.displayMediaElement(listMediaId[i]);

  let arrowNext = this.document.getElementById(`arrow_next`);
  arrowNext.addEventListener('click',()=> {
    hideElements();
    i++;
    displayMediaElement(listMediaId[i]);
  });

  let arrowPrevious = this.document.getElementById(`arrow_previous`);
  arrowPrevious.addEventListener('click',()=> {
    hideElements();
    i--;
    displayMediaElement(listMediaId[i]);
  });


}

function displayLightbox() {
  // Displaying the lightbox modal background
  const lightboxModal = document.getElementById('lightbox_modal');
  lightboxModal.style.display = "block";

  // Displaying the lightbox in the modal
  const lightbox = document.querySelector('.lightbox');
  lightbox.setAttribute("style", "display:flex");
}

function displayMediaElement(elementIdNumber) {
  // Fetching the element to display by its id
  let elementToDisplay = document.getElementById(`lightbox_media_${elementIdNumber}`);
  // Making it visible
  elementToDisplay.setAttribute("style", "display:flex");
}
//

//
//   // Storing the element to display in a variable
//   let idElementToDisplay = `lightbox_media_${idSelectedMedia}` // variable passed through displayLightbox() parameters
//   // TODO: find a way to type it before calling findIndex)
//   // Producing the Index number of the element to display to give it to the navigation function
//   let indexElementToDisplay = listMediaId.findIndex(element=> element == idSelectedMedia);
//
//   // Fetching the element to display by its id
//   let elementToDisplay = document.getElementById(idElementToDisplay);
//   // Making it visible
//   elementToDisplay.setAttribute("style", "display:flex");
//
//   const arrowNext = this.document.getElementById(`arrow_next_${idSelectedMedia}`);
//   arrowNext.addEventListener('click',()=> {
//     this.hideCurrentDisplay(idSelectedMedia);
//     let indexNextElementToDisplay = this.showNextElement(listMediaId, indexElementToDisplay);
//     this.showNextDisplay(indexNextElementToDisplay);
//   });
//
//   const arrowPrevious = this.document.getElementById(`arrow_previous_${idSelectedMedia}`);
//   arrowPrevious.addEventListener('click', () => {
//     this.showPreviousElement(listMediaId, idSelectedMedia);
//   });
// }
//
// function showNextElement(listMediaId, currentElementIndex) {
//   // Getting the next element's index in the array
//   let nextElementIndex = currentElementIndex + 1;
//   let nextElementId = listMediaId[nextElementIndex];
//   return nextElementIndex;
// }
//
// function showNextDisplay(displayId) {
//   let idNextElementToDisplay = `lightbox_media_${displayId}`;
//   let nextElementToDisplay = document.getElementById(idNextElementToDisplay);
//   nextElementToDisplay.setAttribute('style', 'display: flex');
// }
//
function hideElements() {
  let lightboxImage = document.querySelectorAll('.lightbox_element');

  for (let element of lightboxImage) {
    element.removeAttribute('style');
  }
}
//
// function showPreviousElement(listMediaId, indexElementToDisplay) {
// }
//
const closeButton = document.getElementById('close_button');
closeButton.addEventListener('click', () => {
  this.closeLightbox()
})

function  closeLightbox() {
  const lightbox = document.getElementById('lightbox_modal');
  lightbox.style.display = "none";
  hideElements();
}
// TODO: send lightboxHtml here
// TODO: attention pour addEventListenenrs utiliser fonction fléchées

// in classes this.function tend to lose their scope
