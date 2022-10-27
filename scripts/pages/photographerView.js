class PhotographerView {
  showPhotographerDetails(photographerDetails, photographerMedia) {
    let headerInfo = '';
    let headerImage = '';
    let imageSection = '';
    let modalContact = photographerDetails.name;
    let lightboxDisplay = '';

    headerInfo += this.createPhotographerDetails(photographerDetails)[0];
    headerImage += this.createPhotographerDetails(photographerDetails)[1];

    for(let media of photographerMedia) {
      imageSection += this.createPhotographerMedia(media);
      lightboxDisplay += this.createLightboxDisplay(media);
      this.createMediaTag(media);
    }

    const photographerHeader = document.querySelector('.photographer-info');
    photographerHeader.innerHTML = headerInfo ;
    const photographerHeaderImage = document.querySelector('.image-wrapper');
    photographerHeaderImage.innerHTML = headerImage;
    const photographerMediaSlot = document.querySelector('.photographer_details');
    photographerMediaSlot.innerHTML = imageSection;
    const modalHeader = document.querySelector('h3');
    modalHeader.innerHTML = modalContact;
    const lightboxImage = document.querySelector('.lightbox_image');
    lightboxImage.innerHTML = lightboxDisplay;

  };

  createPhotographerDetails(photographer) {
    let headerInfo  = `
       <h1>${photographer.name}</h1>
       <p class="location">${photographer.city}, ${photographer.country}</p>
       <p class="tagline">${photographer.tagline}</p>
       <div class="price-info">
        <div class="media-likes">
          <span></span>
          <span class="heart"></span>
        </div> 
         <div>${photographer.price}€ / jour</div>
      </div>
    `
    let headerImage = `<img class=""src="assets/photographers/${photographer.portrait}"/>`

    return [headerInfo, headerImage];
  }

  createPhotographerMedia(media) {
    let mediaAsset = this.createMediaTag(media);
    let imageSlot= `
      <div class="image-slot">
        <a onclick="displayLightbox()">
          <div class="photographer-image">
            ${mediaAsset}
          </div>  
        </a>
        <div class="media-caption">
          <div class="media-title">${media.title}</div>
          <div class="media-likes">
            <span>${media.likes}</span>
            <span class="heart"></span>
          </div>
        </div>
      </div>
    `
    return imageSlot;
  }

  createMediaTag(media) {
    let mediaHtml= '';
    let mediaType = String(Object.keys(media).filter(mediaType => mediaType === 'video' || mediaType === 'image'));

    if(mediaType === 'image') {
      mediaHtml = `<img class="image-art" src="assets/images/${media.image}"/>`
    } else {
      mediaHtml = `<video class="image-art" type="video/mp4" src="assets/images/${media.video}"/>`
    }

    return mediaHtml;
  }

  createLightboxDisplay(media) {
    let mediaElements = this.createMediaTag(media);
    console.log(mediaElements);
    let lightboxDisplay = mediaElements;
    return lightboxDisplay;
  }
}
