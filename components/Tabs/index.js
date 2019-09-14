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
  const tabTopic = document.createElement("div");
  //structure
  //content
  tabTopic.textContent = data.topics;
  //   data.topics.forEach(i => {
  //     // console.log(i);
  //     tabTopic.appendChild(data.topics[i]);
  //   });
  //style
  tabTopic.classList.add("tab");
  //event listener
  return tabTopic;
}
axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(tabResults => {
    // console.log("tab", tabResults.data.topics);
    const tabs = newTab(tabResults.data);
    topicSection.appendChild(tabs);
  })
  .catch(err => {
    console.log(err);
  });

//content

//event listener
