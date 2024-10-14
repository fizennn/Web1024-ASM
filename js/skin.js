function skin(id, name, price, img, type) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.img = img;
  this.type = type;
}

function loadAllWeaponSkin() {
  const AllWeaponSkin = localStorage.getItem("AllWeaponSkin");
  return AllWeaponSkin ? JSON.parse(AllWeaponSkin) : [];
}

let AllSkin = loadAllWeaponSkin();

console.log(AllSkin);

function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

let id = parseInt(getParameterByName("id")) - 1;

function icon(price) {
  if (price >= 2475) {
    return "Mythical";
  } else if (price >= 2175) {
    return "Legendary";
  } else if (price >= 1775) {
    return "Epic";
  } else if (price >= 2175) {
    return "Rare";
  } else {
    return "Common";
  }
}

function type(type) {
  if ((type = 0)) {
    return "Melles";
  } else {
    return "Weapons";
  }
}

const skinContainer = document.getElementById("skin");

skinContainer.innerHTML = `<div class="skin2">
                    <h3>Name : ${AllSkin[id].name}</h3>
                    <h4>ID   : ${AllSkin[id].id}</h4>
                    <h4>Type : ${type(AllSkin[id].type)}</h4>
                    <h4>Cost : ${AllSkin[id].price}</h4>
                    <h4>Rarity : ${icon(AllSkin[id].price)}</h4>

                    <button id="btnAdd">
                        Add To Cart
                    </button>
                </div>
                <div class="skin1">
                    <img src="${AllSkin[id].img}" alt="">
                </div>`;

const other = document.getElementById("hang");

for (let i = 3; i < 6; i++) {
  other.innerHTML += `<div class="item">
  <img src="${AllSkin[i].img}" alt="">
  <p>${AllSkin[i].name}</p>
  <img src="https://vgraphs.com/images/weapons/skins/editions/exclusive-edition.png" alt="" class="icon">
  <a>${AllSkin[i].price + "VP"}</a>

      <div class="item-function" id="itemFunction">
          <img src="img/icons8-heart.png" alt="" width="10px" class="heart">
          <img src="img/icons8-shop.png" alt=""  width="10px" class="shop">
          <img src="img/icons8-info.png" alt="" width="10px" class="info">
      </div>

</div>`;
}

const btnAdd = document.getElementById("btnAdd");

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

let cart = loadCart();

btnAdd.addEventListener("click", function () {

  cart.push({ id: id });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Add to cart successful ! " + AllSkin[id].name);
});
