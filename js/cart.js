const cartlist = document.getElementById("cart");
const payment = document.getElementById("payment");

function skin(id, name, price, img, type) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.img = img;
  this.type = type;
}

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

function loadAllWeaponSkin() {
  const AllWeaponSkin = localStorage.getItem("AllWeaponSkin");
  return AllWeaponSkin ? JSON.parse(AllWeaponSkin) : [];
}

let allSkin = loadAllWeaponSkin();
let carttemp = loadCart();
let cart = [];

console.log(cart);

// Mapping carttemp items to actual skins
for (let i = 0; i < carttemp.length; i++) {
  cart.push(allSkin[carttemp[i].id]); // Make sure carttemp[i] has an id
}

console.log(cart);

function icon(price) {
  if (price >= 2475) {
    return "https://vgraphs.com/images/weapons/skins/editions/ultra-edition.png";
  } else if (price >= 2175) {
    return "https://vgraphs.com/images/weapons/skins/editions/exclusive-edition.png";
  } else if (price >= 1775) {
    return "https://vgraphs.com/images/weapons/skins/editions/premium-edition.png";
  } else if (price >= 1375) {
    return "https://vgraphs.com/images/weapons/skins/editions/deluxe-edition.png";
  } else {
    return "https://vgraphs.com/images/weapons/skins/editions/select-edition.png";
  }
}

// Display cart items
for (let i = 0; i < cart.length; i++) {
  cartlist.innerHTML += `
    <div class="item">
      <div class="item1">
        <img src="${cart[i].img}" alt="">
        <p>${cart[i].name}</p>
        <img src="${icon(cart[i].price)}" alt="" class="icon">
        <a>${cart[i].price + "VP"}</a>
      </div>
      <div class="item2">
        <img width="30" height="30" src="img/icons8-heart-100w.png" alt="search--v1" />
        <img width="30" height="30" src="img/icons8-info-100w.png" alt="search--v1" />
        <img width="30" height="30" src="img/icons8-delete-100.png" alt="search--v1" class="btndelete" data-id="${i}" />
      </div>
    </div>`;
}

// Calculate total and display in payment section

let total = 0;

for (let i = 0; i < cart.length; i++) {
  payment.innerHTML += `
    <div class="item">
      <div class="item1">
        <p>${cart[i].name}</p>
        <a>${cart[i].price + "VP"}</a>
      </div>
    </div>`;
  total += parseInt(cart[i].price);
}

payment.innerHTML += `
  <div class="item" id="total">
    <div class="item1">
      <p>Total</p>
      <a>${total + "VP"}</a>
    </div>
  </div>`;

var btndelete = document.querySelectorAll(".btndelete");

btndelete.forEach(function (element) {
  element.addEventListener("click", function () {
    const id = parseInt(element.getAttribute("data-id"));
    carttemp.splice(id, 1);
    localStorage.setItem("cart", JSON.stringify(carttemp));
    alert("Delete successful ! " + cart[id].name);
    location.reload(true);
    console.log(cart);
  });
});

const pay = document.getElementById("pay");

pay.addEventListener("click",function () {
    window.location.href = `payment.html?total=${total}`;
  }
);
