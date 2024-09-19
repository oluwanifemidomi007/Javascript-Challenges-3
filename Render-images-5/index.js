// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
let container = document.getElementById("container");

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

function renderImages(arr) {
  let listImages = "";

  for (let i = 0; i < arr.length; i++) {
    listImages += `<img src='${arr[i]}' class="team-img"/>`;
  }
  container.innerHTML = listImages;
  console.log(listImages);
}

renderImages(imgs);
