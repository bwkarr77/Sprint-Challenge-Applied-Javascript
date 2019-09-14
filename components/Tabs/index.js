// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicSection = document.querySelector(".topics");

function newTab(data) {
  //create
  const tab = document.createElement("div");
  const tabTopic = document.createElement("p");
  //structure
  tab.appendChild(tabTopic);
  //content
  tab.textContent = data.topics;
  //   data.topics.forEach(i => {
  //     console.log(i);
  //     tabTopic.textContent = i;
  //   });
  //style
  tab.classList.add("tab");
  return tab;
}
axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(tabResults => {
    // console.log(tabResults.data.topics);
    const tabs = newTab(tabResults.data);
    topicSection.appendChild(tabs);
  })
  .catch(err => {
    console.log(err);
  });

//content

//event listener
