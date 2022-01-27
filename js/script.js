//QUESTION 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//QUESTION 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//QUESTION 3

heading.style.fontSize = "2em";

//QUESTION 4

heading.classList.add("subheading");

//QUESTION 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}
//QUESTION 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//QUESTION 7
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function createList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

createList(cats);

//QUESTION 8

function createCats(catsList) {
  let html = "";

  for (let i = 0; i < catsList.length; i++) {
    let catAge = "Age unknown";

    if (catsList[i].age) {
      catAge = catsList[i].age;
    }

    html += `<div class="cat">
                  <h5>${catsList[i].name}</h5>
                  <p>Age: ${catAge}</p>
              </div>`;
  }

  return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
