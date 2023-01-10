class PhotographerView {
  showPhotographerDetails(photographerDetails, photographerMedia, filteredMedia) {
    this.selectOption(filteredMedia);
    let htmlContent = this.createPhotographerView(photographerDetails, photographerMedia, filteredMedia);

    const htmlHeaderInfo = document.querySelector('.photographer_info');
    htmlHeaderInfo.innerHTML = htmlContent.headerInfo;

    const htmlHeaderThumbnail = document.querySelector('.photographer_thumbnail');
    htmlHeaderThumbnail.innerHTML = htmlContent.headerThumbnail;

    // TODO: see if I can return this directly from the function
    // Creating variable to store each element of the mediaCards table
    this.displayMediaCard(htmlContent.mediaCards);

    this.initializeTotalLikesNumber(htmlContent.likesNumberList);

    let lightbox = new Lightbox;
    lightbox.createLightbox(photographerMedia);

    let mediaCardHearts = document.querySelectorAll('.heart');

    for (let heartElement of mediaCardHearts) {
      heartElement.addEventListener('click', (event) => {
        this.incrementLikesCount(event);
      });
    }
  }

  createPhotographerView(photographer, media, filteredMedia) {
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

    let htmlLightboxDisplay = [];
    this.toggleFilterOptions();
    let cardObject = this.createHtmlMediaCards(filteredMedia.sortedByPopularity);

    // Returning total HTML result
    return {
      headerInfo: htmlHeaderInfo,
      headerThumbnail: htmlHeaderThumbnail,
      mediaCards: cardObject.htmlMediaCards,
      lightboxDisplay: htmlLightboxDisplay,
      likesNumberList: cardObject.likesNumberList,
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

  toggleFilterOptions() {
    let filterToggle = document.getElementById('filter_caret');
    let filterSelect = document.querySelector('.select_options');
    let filterOptions = document.querySelectorAll('.select_option');
    filterToggle.addEventListener('click', () => {
      if (!filterToggle.hasAttribute('style')) {
        filterToggle.setAttribute('style', 'rotate:180deg');
        filterSelect.setAttribute('style', 'height:inherit')
        for (let divElement of filterOptions) {
          divElement.setAttribute('style', 'display:block')
        }
      } else {
        filterToggle.removeAttribute('style');
        filterSelect.removeAttribute('style');
        for (let divElement of filterOptions) {
          divElement.removeAttribute('style');
        }
      }
    })
  }

  selectOption(filteredMedia) {
    let filterSelect = document.querySelector('.select_options');
    let filterOptions = document.querySelectorAll('.select_option');
    let filterToggle = document.getElementById('filter_caret');
    let popularity = document.getElementById('popularity');
    let date = document.getElementById('date');
    let title = document.getElementById('title');
    let currentOption = document.getElementById('current_option');

    // TODO: remove if not used
    let selectedFilter = undefined;

    popularity.addEventListener('click', (event) => {
      currentOption.innerHTML = 'Popularité';
      filterSelect.removeAttribute('style');
      filterToggle.removeAttribute('style');
      for (let divElement of filterOptions) {
        divElement.removeAttribute('style');
      }
      let cardObject = this.createHtmlMediaCards(filteredMedia.sortedByPopularity);
      this.displayMediaCard(cardObject.htmlMediaCards);
    })
    date.addEventListener('click', () => {
      currentOption.innerHTML = 'Date';
      filterSelect.removeAttribute('style');
      filterToggle.removeAttribute('style');
      for (let divElement of filterOptions) {
        divElement.removeAttribute('style');
      }
      let cardObject = this.createHtmlMediaCards(filteredMedia.sortedByDate);
      this.displayMediaCard(cardObject.htmlMediaCards);
    })
    title.addEventListener('click', () => {
      currentOption.innerHTML = 'Titre';
      filterSelect.removeAttribute('style');
      filterToggle.removeAttribute('style');
      for (let divElement of filterOptions) {
        divElement.removeAttribute('style');
      }
      let cardObject = this.createHtmlMediaCards(filteredMedia.sortedByTitle);
      this.displayMediaCard(cardObject.htmlMediaCards);
    })
  }

  createHtmlMediaCards(media) {
    console.log(media);
    let htmlMediaCards = [];
    let likesNumberList = [];

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
    return {
      htmlMediaCards : htmlMediaCards,
      likesNumberList : likesNumberList,
    };
  }

  displayMediaCard(mediaCards) {
    let mediaCard = '';

    for (let element of mediaCards) {
      mediaCard += element;
    }

    const htmlMediaCards = document.querySelector('.photographer_art_pieces');
    htmlMediaCards.innerHTML = mediaCard;
  }
}
