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

    this.initializeTotalLikesNumber(htmlContent.likesNumberList);

    let lightbox = new Lightbox;
    lightbox.createLightbox(photographerMedia);

    let mediaCardHearts = document.querySelectorAll('.heart');

    for (let heartElement of mediaCardHearts) {
      heartElement.addEventListener('click', (event) => {
        this.incrementLikesCount(event);
      });
    }

    let filterSelect = document.querySelector('.filter_select');
    filterSelect.addEventListener('click', () => {
      console.log('this.toggleSelect');
    })
    let filterOptions = document.querySelectorAll('.select_option');
    for (let option of filterOptions) {
      option.addEventListener('click', () => {
        console.log(option.id);
      })
    }
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
    let likesNumberList = [];

    // Looping through the elements
    for (let element of media) {
      // Declaring a variable to discriminate between video and image elements
      let mediaHtml = Factory.generateMediaTagFactory(element);

      // Creating the html for the media cards
      let htmlMediaCard = `
        <div class="image-slot">
          <a class="lightbox_display"> 
            <div class="photographer-image">
              ${mediaHtml}
            </div>
          </a>
          <div class="media-caption">
            <div class="media-title">${element.title}</div>
            <div class="media-likes">
              <span id="likes_number_${element.id}" data-likes-id="${element.id}" class="likes">${element.likes}</span>
              <span class="heart"></span>
            </div>
          </div>
        </div>
      `
      // Storing the media elements in a table
      htmlMediaCards.push(htmlMediaCard);
      likesNumberList.push(element.likes);
    }

    // Returning total HTML result
    return {
      headerInfo: htmlHeaderInfo,
      headerThumbnail: htmlHeaderThumbnail,
      mediaCards: htmlMediaCards,
      lightboxDisplay: htmlLightboxDisplay,
      likesNumberList: likesNumberList,
    };
  }

  incrementLikesCount(event) {
    let spanCount = event.target.parentNode.querySelector('.likes');
    spanCount.innerHTML = parseInt(spanCount.innerHTML)+1;
    let totalLikesCount = document.getElementById('total_likes_number');
    totalLikesCount.innerHTML = parseInt(totalLikesCount.innerHTML)+1;
  }

  initializeTotalLikesNumber(likesNumberList) {
    let totalLikesNumber = likesNumberList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
    let totalLikesHtmlDisplay = document.getElementById('total_likes_number');
    totalLikesHtmlDisplay.innerHTML = totalLikesNumber.toString();
  }
}

