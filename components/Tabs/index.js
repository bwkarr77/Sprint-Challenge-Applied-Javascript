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
//create
const tab = document.createElement("div");
//structure

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(results => {
    console.log(results.data);
    // console.log(results.data.topics[1]);
    results.data.topics.forEach(i => {
      tab.append(i);
    });
    // const tab = newTab(results.data);
  })
  .catch(err => {
    console.log(err);
  });
topicSection.appendChild(tab);

//style
tab.classList.add("tab");
//content

//event listener
