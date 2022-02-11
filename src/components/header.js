// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).

/** Creates this markup:
 ```
  <div class="header">
    <span class="date">{ date }</span>
    <h1>{ title }</h1>
    <span class="temp">{ temp }</span>
  </div>
  ```
 */
const Header = (title, date, temp) => {
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const titleH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;

  headerDiv.append(dateSpan, titleH1, tempSpan);

  return headerDiv;
};

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
const headerAppender = (selector) => {
  // It should create a header using the Header component above, passing arguments of your choosing.
  const header = Header("Lambda Times", "02/11/22", "26°");

  // Get the element in the DOM that matches the given selector
  const element = document.querySelector(selector);

  // Append the header to the element
  element.append(header);
};

export { Header, headerAppender };
