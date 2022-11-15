class PhotographerView {
  showPhotographerDetails(photographerDetails, photographerMedia) {
    let htmlContent = this.createPhotographerView(photographerDetails, photographerMedia);

    const htmlHeaderInfo = document.querySelector('.photographer_info');
    htmlHeaderInfo.innerHTML = htmlContent.headerInfo;

    const htmlHeaderThumbnail = document.querySelector('.photographer_thumbnail');
    htmlHeaderThumbnail.innerHTML = htmlContent.headerThumbnail;

    // TODO: see if I can return this directly from the function
    // Creating variable to store each element of the mediaCards table
    let mediaCard = '';

    for (let element of htmlContent.mediaCards) {
      mediaCard += element;
    }

    const htmlMediaCards = document.querySelector('.photographer_art_pieces');
    htmlMediaCards.innerHTML = mediaCard;

    const htmlLightboxContent = document.querySelector('.lightbox_content');
    // let lightbox = new Lightbox;
    // lightbox.init(add event listener on existing media);
    htmlLightboxContent.innerHTML = htmlContent.lightboxDisplay.join('');

    this.incrementLikesCount();
  }

  createPhotographerView(photographer, media) {
    // Creating header photographer info and image thumbnail:
    let htmlHeaderInfo = `
       <h1>${photographer.name}</h1>
       <p class="location">${photographer.city}, ${photographer.country}</p>
       <p class="tagline">${photographer.tagline}</p>
       <div class="price-info">
        <div class="media-likes">
          <span id="total_likes_number"></span>
          <span class="heart"></span>
        </div>
         <div>${photographer.price}€ / jour</div>
      </div>
    `;

    let htmlHeaderThumbnail = `<img class="" src="assets/photographers/${photographer.portrait}"/>`;

    // Creating image and video cards (mediaCard) by looping through media data
    // Creating variable to fill in with loop return values
    let htmlMediaCards = [];
    let htmlLightboxDisplay = [];

    // Looping through the elements
    for (let element of media) {

      // Declaring a variable to discriminate between video and image elements
      let mediaAsset = String(Object.keys(element).filter(mediaAsset => mediaAsset === 'video' || mediaAsset === 'image'));

      // Creating the variable to store results of the following if condition
      let mediaHtml = '';

      // Condition to create either an <img> or <video> element
      if (mediaAsset === 'image') {
        mediaHtml = `
          <img
            id="media_element_${element.id}"
            class="media_element"
            data-media-id="${element.id}"
            src="assets/images/${element.image}"
          />
        `
      } else {
        mediaHtml = `
          <video
            id="media_element_${element.id}"
            class="media_element"
            data-media-id="${element.id}"
            src="assets/images/${element.video}"
            type="video/mp4"
          />
        `
      }

      // Creating the html for the media cards
      let htmlMediaCard = `
        <div class="image-slot">
          <a onclick="createLightbox(${element.id})"> <!--// TODO: let lightbox new Lightbox...-->
            <div class="photographer-image">
              ${mediaHtml}
            </div>
          </a>
          <div class="media-caption">
            <div class="media-title">${element.title}</div>
            <div class="media-likes">
              <span id="likes_number_${element.id}" data-likes-id="${element.id}" class="likes">${element.likes}</span>
              <span id="heart" class="heart"></span>
            </div>
          </div>
        </div>
      `
      // Storing the media elements in a table
      htmlMediaCards.push(htmlMediaCard);

      // Creating lightbox display
      let htmlLightboxElement = `
          <div id="lightbox_media_${element.id}" class="lightbox_element">
              <div class="lightbox_image">
                ${mediaHtml}
              </div>
          </div>
      `
      htmlLightboxDisplay.push(htmlLightboxElement);
    }

    // Declare variable to store the entire HTML content to pass on to main class function
    let totalHtml = {
      headerInfo : htmlHeaderInfo,
      headerThumbnail : htmlHeaderThumbnail,
      mediaCards : htmlMediaCards,
      lightboxDisplay: htmlLightboxDisplay,
    };

    // Returning total HTML result
    return totalHtml;
  }

  incrementLikesCount() {
    // Getting all the likes elements
    let likesNodesList = document.querySelectorAll('.likes');
    console.log(likesNodesList);
    let likesNumberList = [];
    let totalLikesNumber = Number;
    for(let nodeElement of likesNodesList) {
      nodeElement.addEventListener('click', () => {
        // Storing the return values of the function used to get the selected node's id and text content
        let likesInformation = this.returnContent(nodeElement); // returns an object with node's id and text content
        // Replacing the node element content with the return value of the increment function
        nodeElement.innerHTML = this.incrementNumber(likesInformation.selectedLikesNumber);
      })
      // Storing each likes value in a table
      let likesNumber = Number(nodeElement.textContent);
      likesNumberList.push(likesNumber);
      totalLikesNumber = likesNumberList.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
    }
    let totalLikesHtmlDisplay = document.getElementById('total_likes_number');
    return totalLikesHtmlDisplay.innerHTML = totalLikesNumber.toString();
  }

  incrementNumber(likesNumber) {
    likesNumber ++;
    return likesNumber;
  }

  returnContent(nodeElement) {
    // Extracting the nodes dataset value to get the element's id
    let selectedLikesNodeDatasetValue = nodeElement.dataset.likesId;
    // Extracting the node's content to get likes number
    let selectedLikesNumber = nodeElement.textContent;

    // Storing the information in an object
    return {
      selectedLikesNodeId: selectedLikesNodeDatasetValue,
      selectedLikesNumber: selectedLikesNumber,
    };
  }
}

