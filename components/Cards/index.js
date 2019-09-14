// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardSection = document.querySelector(".cards-container");

function newComp(info) {
  //   console.log(info);
  //create
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createElement("span");
  //structure
  card.append(headline, author);
  author.append(imgCont);
  imgCont.append(image, name);
  //content
  headline.textContent = info.headline;
  image.src = info.authorPhoto;
  name.textContent = `By ${info.authorName}`;
  //style
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");
  //event listener
  return card;
}

const articleNames = [
  "bootstrap",
  "javascript",
  "jquery",
  "node",
  "technology"
];

articleNames.forEach(article => {
  axios
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(cardResults => {
      //   console.log(cardResults.data);
      //   console.log(cardResults.data.articles[article]);
      for (let i = 0; i < cardResults.data.articles[article].length; i++) {
        // console.log(cardResults.data.articles[article][i]);
        const cards = newComp(cardResults.data.articles[article][i]);
        cardSection.appendChild(cards);
      }
    })
    .catch(err => {
      console.log(err);
    });
});

//create
//structure
//content
//style
//event listener
