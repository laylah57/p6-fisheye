class PhotographerView {
  showPhotographerDetails(listData) {
    let totalHtml = '';
    totalHtml += this.createPhotographerDetails(listData);

    const photographerHeader = document.querySelector('.photographer-info');
    photographerHeader.innerHTML = totalHtml;
  };

  createPhotographerDetails(photographer) {
    let htmlHeader  = `
       <h2>Hi</h2>
    `
    console.log(photographer);
    return htmlHeader;
  }
}
