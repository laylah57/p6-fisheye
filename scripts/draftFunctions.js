// Original Factory function from photographerView.js
function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

// trying to store DOM Elements parameter in a table and then create them
// I think it worked but I failed to add class attributes on top of it.
const elementParameters = [{
  name: 'name',
  tag: 'h2',
  content: photographer.name,
}, {
  name: 'location',
  tag: 'span',
  content: photographer.city + ', ' + photographer.country,
}, {
  name: 'price',
  tag: 'span',
  content: photographer.price + '€/jour',
}, {
  name: 'tagline',
  tag: 'span',
  content: photographer.tagline,
},];

function createElements() {
  elementParameters.forEach((element) => {
    element = createNodeElement(element.name, article, element.tag, element.content);
    return { element };
  })
  return elementParameters;
}
