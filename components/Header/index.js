// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  //create
  const header = document.createElement("div");
  const date = document.createElement("span");
  const header1 = document.createElement("h1");
  const temp = document.createElement("span");

  //structure
  header.append(date, header1, temp);

  //content
  date.textContent = "March 28, 2019";
  header1.textContent = "Lamba Times";
  temp.textContent = "98°";

  //styles
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  //event listeners
  //none

  return header;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
