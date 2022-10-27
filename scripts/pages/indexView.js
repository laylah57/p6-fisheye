class View {
  showPhotographers(listPhotographers, photographerMedia) {
    let totalHtml = '';
    for(let photographer of listPhotographers) {
      totalHtml += this.showPhotographer(photographer);
    }
    const photographerSection = document.querySelector('.photographer_section');
    photographerSection.innerHTML = totalHtml;

  }

  showPhotographer(photographer) {
    let html = `
    <!--TODO : onclick + redirect to corresponding page -->
    <a href="photographer.html?id=${photographer.id}" class="stretched-link">
      <article>
          <div class="image-wrapper">
            <img alt="Portrait du photographer" src="/assets/photographers/${photographer.portrait}" />
          </div>
          <h2>${photographer.name}</h2>
          <span class="location">${photographer.city + ', ' +  photographer.country}</span>
          <span class="tagline">${photographer.tagline}</span>
          <span class="price">${photographer.price + '€/jour'}</span>
      </article>
    </a>
    `
    return html;
  }

}

// display photographers list in HTML : changes page layout - acts as a vue
