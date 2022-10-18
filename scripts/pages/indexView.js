class View {
  showPhotographers(listPhotographers) {
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
      <article>
          <a href="photographer.html">Click here</a>
          <div class="image-wrapper">
            <img alt="Portrait du photographer" src="/assets/photographers/${photographer.portrait}" />
          </div>
          <h2>${photographer.name}</h2>
          <span class="location">${photographer.city + ', ' +  photographer.country}</span>
          <span class="tagline">${photographer.tagline}</span>
          <span class="price">${photographer.price + '€/jour'}</span>
      </article>
  `
    return html;
  }
}

// display photographers list in HTML : changes page layout - acts as a vue




// function showPhotographers(listPhotographers) {
//   //going through each element of the JSON file
//   listPhotographers.forEach((photographer) => {
//
//     // CREATING DOM ELEMENTS
//     // fetching div from DOM to populate it
//     const photographerSection = document.querySelector('.photographer_section');
//
//     // creating article element and appending it to div parent
//     const article = document.createElement('article');
//     photographerSection.appendChild(article);
//
//     // creating a div wrapper for the image to be in control of how it is displayed
//     const imageWrapper = document.createElement('div');
//     imageWrapper.setAttribute('class', 'image-wrapper');
//     // appending the element to parent article element
//     article.appendChild(imageWrapper);
//
//     // populating the wrapper with the photographer portrait
//     const photographerPicture = createNodeElement(
//       'photographerPicture',
//       imageWrapper,
//       'img'
//     );
//
//     photographerPicture.childElement.setAttribute(
//       'src',
//       `assets/photographers/${photographer.portrait}`
//     );
//
//     // creating node elements that are the same
//     const photographerName = createNodeElement(
//       'photographerName',
//       article,
//       'h2',
//       photographer.name
//     );
//
//     const photographerLocation = createNodeElement(
//       'photographerLocation',
//       article,
//       'span',
//       photographer.city + ', ' + photographer.country
//     )
//
//     const photographerTagLine = createNodeElement(
//       'photographerTagLine',
//       article,
//       'span',
//       photographer.tagline
//     );
//
//     const photographerPrice = createNodeElement(
//       'photographerPrice',
//       article,
//       'span',
//       photographer.price + '€/jour'
//     );
//
//     // ADDING CLASSES TO THE ELEMENTS
//     // storing elements and corresponding class names in a table
//     const elementClass = [{
//       elementName : photographerPrice.childElement,
//       className: 'price',
//     }, {
//       elementName: photographerTagLine.childElement,
//       className: 'tagline',
//     }, {
//       elementName: photographerLocation.childElement,
//       className: 'location',
//     }];
//
//     // function to set attributes to elements
//     function createClass() {
//       elementClass.forEach((element) => {
//         element.elementName.setAttribute('class', element.className);
//       })
//     }
//     createClass();
//     //
//     photographerName.childElement = addAccessibility()
//   });
// }
