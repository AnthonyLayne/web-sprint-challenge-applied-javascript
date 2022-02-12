import axios from "axios";

// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.

// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
const Card = ({ headline, authorPhoto, authorName }) => {
  // The tags used, the hierarchy of elements, and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainerDiv = document.createElement("div");
  const authorPhotoImg = document.createElement("img");
  const authorNameSpan = document.createElement("span");

  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainerDiv.classList.add("img-container");

  headlineDiv.textContent = headline;
  authorPhotoImg.src = authorPhoto;
  authorNameSpan.textContent = authorName;

  imgContainerDiv.appendChild(authorPhotoImg);
  authorDiv.append(imgContainerDiv, authorNameSpan);
  cardDiv.append(headlineDiv, authorDiv);

  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  cardDiv.addEventListener("click", () => console.log(headline));

  return cardDiv;
};

// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
const cardAppender = async (selector) => {
  // Append each card to the element in the DOM that matches the selector passed to the function.
  const element = document.querySelector(selector);

  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  try {
    // However, the articles do not come organized in a single, neat array. Inspect the response closely!
    const response = await axios.get("http://localhost:5000/api/articles");
    const categories = response.data.articles;

    // Create a card from each and every article object in the response, using the Card component:
    Object.values(categories).forEach((category) => {
      category.forEach((article) => {
        const card = Card(article);
        element.append(card);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export { Card, cardAppender };
