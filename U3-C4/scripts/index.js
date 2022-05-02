// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

import { searchnews, append } from "./fetch.js";

document.getElementById("navbar").innerHTML = navbar();

let search = (e) => {
  //   window.location.href = "search.html";
  if (e.key == "Enter") {
    console.log("Hello");
    const query = document.getElementById("search_input").value;
    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
    searchnews(url).then((data) => {
      console.log(data);
      let container = document.getElementById("results");
      container.innerHTML = null;
      append(data.articles, container);
    });
  }
};

document.getElementById("search_input").addEventListener("keydown", search);

let sidebars = document.getElementById("sidebar").children;
console.log(sidebars);

function cSearch() {
  console.log(this.id);
  let country_code = this.id;
  let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`;
  searchnews(url).then((data) => {
    console.log(data);
    let container = document.getElementById("results");
    container.innerHTML = null;
    append(data.articles, container);
  });
}
for (let el of sidebars) {
  el.addEventListener("click", cSearch);
}
