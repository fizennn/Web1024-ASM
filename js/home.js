//Khỏi tạo đối tượng skin
//0 mele
//1 gun

function skin(id, name, price, img, type) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.img = img;
  this.type = type;
}

let AllWeaponSkin = [];

AllWeaponSkin.push(
  new skin(
    1,
    "Smite Phantom",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-phantom-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    2,
    "Smite Odin",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-odin-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    3,
    "Elderflame Vandal",
    "2475",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-elderflame-vandal-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    4,
    "Prime Vandal",
    "1775",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-prime-vandal-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    5,
    "Glitchpop, EP 2 Vandal",
    "2175",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-glitchpop-ep-2-vandal-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    6,
    "Reaver Vandal",
    "1775",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-reaver-vandal-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    7,
    "Smite Phantom",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-phantom-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    8,
    "Smite Phantom",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-phantom-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    9,
    "Smite Phantom",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-phantom-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    10,
    "Smite Phantom",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-phantom-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    11,
    "Smite Phantom",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-phantom-weapon-skin.png",
    "1"
  )
);

AllWeaponSkin.push(
  new skin(
    12,
    "Smite Phantom",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-phantom-weapon-skin.png",
    "1"
  )
);


localStorage.setItem('AllWeaponSkin', JSON.stringify(AllWeaponSkin));

function loadAllWeaponSkin() {
  const AllWeaponSkin = localStorage.getItem('AllWeaponSkin');
  return AllWeaponSkin ? JSON.parse(AllWeaponSkin) : [];
}


// console.log(AllWeaponSkin)

const topRateSkin = document.getElementById("hang");
const topRateMelee = document.getElementById("hang1");

let topSkin = [];
let topSkinMelee = [];

topSkin.push(
  new skin(
    1,
    "Smite Phantom",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-phantom-weapon-skin.png"
  )
);
topSkin.push(
  new skin(
    2,
    "Smite Odin",
    "875",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-odin-weapon-skin.png"
  )
);
topSkin.push(
  new skin(
    3,
    "Elderflame Vandal",
    "2475",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-elderflame-vandal-weapon-skin.png"
  )
);
topSkin.push(
  new skin(
    4,
    "Prime Vandal",
    "1775",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-prime-vandal-weapon-skin.png"
  )
);
topSkin.push(
  new skin(
    5,
    "Glitchpop, EP 2 Vandal",
    "2175",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-glitchpop-ep-2-vandal-weapon-skin.png"
  )
);
topSkin.push(
  new skin(
    6,
    "Reaver Vandal",
    "1775",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-reaver-vandal-weapon-skin.png"
  )
);

topSkinMelee.push(
  new skin(
    7,
    "Smite Knife",
    "1750",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-smite-knife-weapon-skin.png"
  )
);
topSkinMelee.push(
  new skin(
    8,
    "Singularity Knife",
    "4350",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-singularity-knife-weapon-skin.png"
  )
);
topSkinMelee.push(
  new skin(
    9,
    "Sovereign Sword",
    "3550",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-sovereign-sword-weapon-skin.png"
  )
);
topSkinMelee.push(
  new skin(
    10,
    "Nebula Knife",
    "3550",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-nebula-knife-weapon-skin.png"
  )
);
topSkinMelee.push(
  new skin(
    11,
    "Oni Claw",
    "3550",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-oni-claw-weapon-skin.png"
  )
);
topSkinMelee.push(
  new skin(
    12,
    "Spline Dagger",
    "4350",
    "https://vgraphs.com/images/weapons/skins/full-details/valorant-spline-dagger-weapon-skin.png"
  )
);

// console.log(topSkin);

function icon(price) {
  if (price >= 2475) {
    return "https://vgraphs.com/images/weapons/skins/editions/ultra-edition.png";
  } else if (price >= 2175) {
    return "https://vgraphs.com/images/weapons/skins/editions/exclusive-edition.png";
  } else if (price >= 1775) {
    return "https://vgraphs.com/images/weapons/skins/editions/premium-edition.png";
  } else if (price >= 2175) {
    return "https://vgraphs.com/images/weapons/skins/editions/deluxe-edition.png";
  } else {
    return "https://vgraphs.com/images/weapons/skins/editions/select-edition.png";
  }
}

for (let i = 0; i < topSkin.length; i++) {
  topRateSkin.innerHTML += `<div class="item">
                    <img src="${topSkin[i].img}" alt="">
                    <p>${topSkin[i].name}</p>
                    <img src="${icon(topSkin[i].price)}" alt="" class="icon">
                    <a>${topSkin[i].price + "VP"}</a>
                        <div class="item-function" id="itemFunction">
                            <img src="img/icons8-heart.png" alt="" width="10px" class="heart">
                            <img src="img/icons8-shop.png" alt=""  width="10px" class="shop" data-id="${topSkin[i].id}">
                            <img src="img/icons8-info.png" alt="" width="10px" class="info" data-id="${topSkin[i].id}">
                        </div>
                </div>`;
}



for (let i = 0; i < topSkinMelee.length; i++) {
  topRateMelee.innerHTML += `<div class="item">
  <img src="${topSkinMelee[i].img}" alt="">
  <p>${topSkinMelee[i].name}</p>
  <img src="https://vgraphs.com/images/weapons/skins/editions/exclusive-edition.png" alt="" class="icon">
  <a>${topSkinMelee[i].price + "VP"}</a>

      <div class="item-function" id="itemFunction">
          <img src="img/icons8-heart.png" alt="" width="10px" class="heart">
          <img src="img/icons8-shop.png" alt=""  width="10px" class="shop">
          <img src="img/icons8-info.png" alt="" width="10px" class="info">
      </div>
  
</div>`;
}

// function showIteamFunction(){
//     const item = document.getElementById("itemFunction")
//     item.style.display="flex"
// }

// function hideItemFunction(){
//     const item = document.getElementById("itemFunction")
//     item.style.display="none"

// }

var elements = document.querySelectorAll(".item-function");
var effect = document.querySelectorAll(".effect");
var addToCart = document.querySelectorAll(".shop");
var info = document.querySelectorAll(".info");

elements.forEach(function (element) {
  element.parentElement.addEventListener("mouseover", function () {
    element.style.display = "flex";
    element.style.filter = "none";
  });

  element.parentElement.addEventListener("mouseout", function () {
    element.style.display = "none";
  });

  
});

let cart = loadCart();

addToCart.forEach(function (element) {
  element.addEventListener("click", function () {
    const id = parseInt(element.getAttribute('data-id'));

    cart.push({ id: id-1});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Add to cart successful ! " + AllWeaponSkin[id-1].name)


    
  });
});

info.forEach(function (element) {
  element.addEventListener("click", function () {
    const id = parseInt(element.getAttribute('data-id'));
    window.location.href = `skin.html?id=${id}`;
  });
});

function loadCart() {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
}



let i = 1;
function mbMenu() {
  let menu = document.getElementById("mb-menu"); // Added 'document.'

  if (i == 1) {
    menu.style.display = "block"; // Fixed display assignment

    i = 0;
  } else {
    menu.style.display = "none"; // Fixed display assignment
    i = 1;
  }
}

//Slider

let slideIndex = 1;
showSlides(slideIndex);

// Function to change slide
function changeSlide(n) {
  showSlides((slideIndex += n));
}

// Function to set a specific slide
function setSlide(n) {
  showSlides((slideIndex = n));
}

// Main function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-images");
  let dots = document.getElementsByClassName("dot");

  // Wrap around when reaching end
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and deactivate all dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// setInterval(function() {
//   changeSlide(1);
// }, 5000); // Chuyển slide sau mỗi 5 giây

//Giỏi hàng

