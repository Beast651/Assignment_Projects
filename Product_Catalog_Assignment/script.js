let mainImg = document.querySelector(".main-image");
let catlogImgs = document.querySelectorAll(".sub-image");
let product_api =
  "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448";
let offerPrice = document.querySelector("#offer-price");
let actualPrice = document.querySelector("#actual-price");
let offPer = document.querySelector("#off");
let sizes = document.querySelector(".each-button");
let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let numberInc = document.querySelector(".number");
let addToCart = document.querySelector(".add_to_cart");
let colorPicker = document.querySelectorAll(".clr");
let orderSummary = document.querySelector(".order-summary");
let sizePicker = document.querySelectorAll(".sm input");
let product_desc = document.querySelector("#product-desc");

let product_data = async () => {
  let res = await fetch(product_api);
  let data = await res.json();

  calculateOff(data);
  setProductDetails(data);
};

window.addEventListener("load", () => {
  product_data();
});

let calculateOff = (data) => {
  let actualprice = data.product.compare_at_price.slice(1);
  let offerprice = data.product.price.slice(1);

  let offPercentage = ((actualprice - offerprice) / actualprice) * 100;

  offPer.innerText = `${Math.floor(offPercentage)}% Off`;
  actualPrice.innerText = `$ ${actualprice}`;
  offerPrice.innerText = `$ ${offerprice}`;
};

console.log([offerPrice, actualPrice, offPer]);

catlogImgs.forEach((image) => {
  image.addEventListener("click", (e) => {
    const subImgSrc = e.currentTarget.src;
    const changeColor = e.currentTarget;
    catlogImgs.forEach((image) => {
      image.classList.remove("border");
    });
    changeColor.classList.add("border");
    mainImg.setAttribute("src", subImgSrc);
  });
});

let cnt = 1;
increaseBtn.addEventListener("click", () => {
  if (cnt < 9) {
    numberInc.innerText = ++cnt;
  } else {
    alert("Exceeded Order Limit");
  }
});
decreaseBtn.addEventListener("click", () => {
  if (cnt > 1) {
    numberInc.innerText = --cnt;
  } else {
    alert("Invalid Number");
  }
});

let selectColor = () => {};

addToCart.addEventListener("click", () => {
  orderSummary.classList.remove("hide");
  orderSummary.innerText = `Embrace Sideboard with Color ${chooseColor} and Size ${chooseSize} added to card`;
});

let chooseColor = "";
colorPicker.forEach((color) => {
  color.addEventListener("click", (e) => {
    chooseColor = e.target.dataset.set;
    const choose = e.target;

    orderSummary.classList.add("hide");
    colorPicker.forEach((clr) => {
      clr.classList.remove("border2");
    });
    choose.classList.add("border2");
  });
});
let chooseSize = "";
sizePicker.forEach((size) => {
  // console.log(size);
  size.addEventListener("click", (e) => {
    chooseSize = e.target.value;
    orderSummary.classList.add("hide");
  });
});

let setProductDetails = (data) => {
  product_desc.innerHTML = data.product.description;
};
