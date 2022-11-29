class Lightbox {
  createLightbox(photographerMedia) {
    // Storing the media elements in a table
    let htmlLightboxDisplay = [];
    let elementIdList = [];

    // Catching the <a> elements wrapped around the media images and videos
    let mediaNodeElementsList = document.querySelectorAll('.media_element');
    let lightboxMediaElementId = '';

    // Fetching the node element in which to display the content
    const htmlLightboxContent = document.querySelector('.lightbox_content');

    // Creating lightbox display
    for (let media of photographerMedia) {
      // Declaring a variable to discriminate between video and image elements
      let mediaAsset = String(Object.keys(media).filter(mediaAsset => mediaAsset === 'video' || mediaAsset === 'image'));

      // Creating the variable to store results of the following if condition
      let mediaHtml = '';

      // Condition to create either an <img> or <video> element
      if (mediaAsset === 'image') {
        mediaHtml = `
          <img
            id="media_element_${media.id}"
            class="media_element"
            data-media-id="${media.id}"
            src="assets/images/${media.image}"
          />
        `
      } else {
        mediaHtml = `
          <video
            id="media_element_${media.id}"
            class="media_element"
            data-media-id="${media.id}"
            src="assets/images/${media.video}"
            type="video/mp4"
          />
        `
      }

      // HTML ELEMENT
      let htmlLightboxElement = `
          <div id="lightbox_media_${media.id}" class="lightbox_element">
              <div class="lightbox_image">
                ${mediaHtml}
              </div>
          </div>
      `
      // Pushing each element in an array
      lightboxMediaElementId = media.id;
      elementIdList.push(lightboxMediaElementId);
      htmlLightboxDisplay.push(htmlLightboxElement);

      // Pushing each element in the HTML node wrapper
      htmlLightboxContent.innerHTML += htmlLightboxElement;
    }

    // Preparing a variable to store the selected media ID
    let sourceElementId = Number();

    // Looping through the media displayed on the photographer view to listen to events
    let arrowNext = document.getElementById(`arrow_next`);
    let arrowPrevious = document.getElementById(`arrow_previous`);

    for (let nodeElement of mediaNodeElementsList) {
      nodeElement.addEventListener('click', (event) => {
        // Storing the media ID number
        sourceElementId = nodeElement.dataset.mediaId;
        let i = elementIdList.findIndex(element => element == sourceElementId);
        this.displayLightbox();
        this.displaySelectedElement(sourceElementId);
        arrowNext.addEventListener('click',()=> {
          i++;
          let nextElementId = elementIdList[i];
          this.hideElements();
          this.navigateElements(nextElementId, elementIdList);
        })
        arrowPrevious.addEventListener('click',()=> {
          i--;
          let previousElementId = elementIdList[i];
          this.hideElements();
          this.navigateElements(previousElementId, elementIdList);
        })
      })
    }

    // Getting DOM element to close lightbox and calling corresponding function
    const closeButton = document.getElementById('close_button');
    closeButton.addEventListener('click', (event) => {
      this.closeLightbox()
    })
  }

  displayLightbox() {
    // Displaying the lightbox modal background
    const lightboxModal = document.getElementById('lightbox_modal');
    lightboxModal.style.display = "block";

    // Displaying the lightbox in the modal
    const lightbox = document.querySelector('.lightbox');
    lightbox.setAttribute("style", "display:flex");
  }

  displaySelectedElement(elementIdNumber) {
    // Fetching the element to display by its id
    let elementToDisplay = document.getElementById(`lightbox_media_${elementIdNumber}`);
    elementToDisplay.setAttribute("style", "display:flex");
  }

  navigateElements(idElementToDisplay, elementIdList) {
    let elementToDisplay = document.getElementById(`lightbox_media_${idElementToDisplay}`);
    elementToDisplay.setAttribute('style', 'display: flex');

    let arrayLength = elementIdList.length;
    let elementIndexNumber = elementIdList.findIndex(element => element == idElementToDisplay);
    let arrowNext = document.getElementById(`arrow_next`);
    let arrowPrevious = document.getElementById(`arrow_previous`);
    if (0 === elementIndexNumber) {
      arrowPrevious.setAttribute('style', 'display:none');
    } else if (arrayLength - 1 === elementIndexNumber) {
      arrowNext.setAttribute('style', 'display:none');
    } else if (0 < elementIndexNumber && arrayLength - 1 !== elementIndexNumber) {
      arrowPrevious.removeAttribute('style');
      arrowNext.removeAttribute('style');
    }
  }

  closeLightbox() {
    const lightbox = document.getElementById('lightbox_modal');
    lightbox.style.display = "none";
    this.hideElements();
  }

  hideElements() {
    let lightboxImage = document.querySelectorAll('.lightbox_element');

    for (let element of lightboxImage) {
      element.removeAttribute('style');
    }
  }
}

