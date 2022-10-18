class PhotographerView {
  showPhotographerDetails(listData) {
    let totalHtml = '';
    for(let media  of listData) {
      totalHtml += this.createPhotographerDetails(media);
    }

    const photographerDetails = document.querySelector('.photographer_details');
    photographerDetails.innerHTML = totalHtml;
  };

  createPhotographerDetails(media) {
    let html = `
   <div>Hi ${media.id}</div>
  `
    return html;
  }
}
