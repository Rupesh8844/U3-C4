let searchnews = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log("err:-", err);
  }
};

let append = (data, container) => {
  data.forEach(({ urlToImage, title, description }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "news");

    let box1 = document.createElement("div");
    box1.setAttribute("class", "box1");
    let img = document.createElement("img");
    img.src = urlToImage;

    let box2 = document.createElement("div");
    box2.setAttribute("class", "box2");

    let names = document.createElement("h2");
    names.innerText = title;

    let des = document.createElement("p");
    des.innerText = description;

    box1.append(img);
    box2.append(names, des);

    div.append(box1, box2);
    div.addEventListener("click", function () {
      myfun(data);
    });
    container.append(div);
  });
};

export { searchnews, append };

function myfun(el) {
  console.log(el);
  localStorage.setItem("news", stringify(el));
}
