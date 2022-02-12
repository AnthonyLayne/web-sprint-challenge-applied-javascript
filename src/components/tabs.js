import axios from "axios";

// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
const Tabs = (topics) => {
  // Return the markup below:
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");

  topics.forEach((topic) => {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.textContent = topic;
    topicsDiv.appendChild(tabDiv);
  });

  return topicsDiv;
};

// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
const tabsAppender = async (selector) => {
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  try {
    const response = await axios.get("http://localhost:5000/api/topics");

    // Find the array of topics inside the response
    const { topics } = response.data;

    // Use the array to create the tabs using the Tabs component
    const tabs = Tabs(topics);

    // Find element which matches the selector passed to the function
    const element = document.querySelector(selector);

    // Append the tabs to the element in the DOM which you found
    element.appendChild(tabs);
  } catch (error) {
    console.error(error);
  }
};

export { Tabs, tabsAppender };
