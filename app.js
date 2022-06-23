// active nav
const listEl = document.querySelectorAll("li");

listEl.forEach((activenav) => {
  activenav.addEventListener("click", addActivenav);
});

function addActivenav(e) {
  const currentnav = document.querySelector(".active_nav");
  currentnav.className = currentnav.className.replace("active_nav", "");
  e.target.className += "active_nav";
}

// nav
const navEl = document.querySelector("nav");
// console.log(navEl);

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const navHeight = navEl.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navEl.classList.add("fixed-nav");
  } else {
    navEl.classList.remove("fixed-nav");
  }
});

// countdown
const countdown = () => {
  const countDate = new Date("Apr 10, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const secEl = 1000;
  const minEl = secEl * 60;
  const hourEl = minEl * 60;
  const dayEl = hourEl * 24;

  const time_day = Math.floor(gap / dayEl);
  const time_hour = Math.floor((gap % dayEl) / hourEl);
  const time_min = Math.floor((gap % hourEl) / minEl);
  const time_sec = Math.floor((gap % minEl) / secEl);

  // console.log(time_sec);

  document.querySelector(".day h1").innerHTML = time_day;
  document.querySelector(".hour h1").innerHTML = time_hour;
  document.querySelector(".min h1").innerHTML = time_min;
  document.querySelector(".sec h1").innerHTML = time_sec;
};

setInterval(countdown, 1000);

//Category active
const btnCategoryActiveEl = document.querySelectorAll("#category button");

btnCategoryActiveEl.forEach((activeCategory) => {
  activeCategory.addEventListener("click", addActiveCategory);
});

function addActiveCategory(e) {
  const currentCategory = document.querySelector(".active_category");
  // console.log(currentmenu);
  currentCategory.className = currentCategory.className.replace(
    "active_category",
    ""
  );
  e.target.className += "active_category";
}

// category menu item
const menu = [
  {
    id: 1,
    img: "./img/fruits_1.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "top_rated",
  },
  {
    id: 2,
    img: "./img/fruits_2.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "on_sale",
  },
  {
    id: 3,
    img: "./img/fruits_3.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "top_rated",
  },
  {
    id: 4,
    img: "./img/fruits_4.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "best_selling",
  },
  {
    id: 5,
    img: "./img/fruits_5.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "top_rated",
  },
  {
    id: 6,
    img: "./img/fruits_6.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "best_selling",
  },
  {
    id: 7,
    img: "./img/fruits_7.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "top_rated",
  },
  {
    id: 8,
    img: "./img/fruits_8.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "best_selling",
  },
  {
    id: 9,
    img: "./img/fruits_9.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "best_selling",
  },
  {
    id: 10,
    img: "./img/fruits_10.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "top_rated",
  },
  {
    id: 11,
    img: "./img/fruits_11.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "on_sale",
  },
  {
    id: 12,
    img: "./img/fruits_12.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "on_sale",
  },
];

const menuContainerEl = document.querySelector(".menu_container");
const btnFilterEl = document.querySelectorAll("#btn_filter");

window.addEventListener("DOMContentLoaded", () => {
  const menuLoad = document.querySelectorAll("#btn_filter")[0].dataset.id;
  // console.log(menuLoad);
  const menuCategory = menu.filter((filterItem) => {
    // console.log(filterItem.category);
    if (filterItem.category === menuLoad) {
      return filterItem;
    }
  });
  menuDisplayItem(menuCategory);
  // console.log(menuCategory);
});

btnFilterEl.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((filterItem) => {
      // console.log(filterItem.category);
      if (filterItem.category === category) {
        return filterItem;
      }
    });
    menuDisplayItem(menuCategory);
    // console.log(menuCategory);
  });
});

function menuDisplayItem(menuItem) {
  let menuDisplay = menuItem.map((item) => {
    // console.log(item);

    return `<div class="cursor-pointer hover:scale-105 shadow-2xl">
    <img src="${item.img}" alt="">
    <div class="text-yellow-500 mb-3 text-center">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>
    <h1 class="text-[#282828] text-xl font-semibold ml-5">${item.heading}</h1>
    <p class="text-[#969696] text-xl font-semibold ml-5">${item.paragraph}</p>
</div>`;
  });
  menuDisplay = menuDisplay.join("");
  menuContainerEl.innerHTML = menuDisplay;
}

//shop active
const btnShopActiveEl = document.querySelectorAll("#shop button");

btnShopActiveEl.forEach((activeShop) => {
  activeShop.addEventListener("click", addActiveShop);
});

function addActiveShop(e) {
  const currentShop = document.querySelector(".active_shop");
  // console.log(currentmenu);
  currentShop.className = currentShop.className.replace("active_shop", "");
  e.target.className += "active_shop";
}

// Accessories menu item
const accessories = [
  {
    id: 1,
    img: "./img/fruits_1.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "fruits",
  },
  {
    id: 2,
    img: "./img/fruits_2.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "fruits",
  },
  {
    id: 3,
    img: "./img/fruits_3.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "lemon",
  },
  {
    id: 4,
    img: "./img/fruits_4.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "veg",
  },
  {
    id: 5,
    img: "./img/fruits_5.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "veg",
  },
  {
    id: 6,
    img: "./img/fruits_6.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "fruits",
  },
  {
    id: 7,
    img: "./img/fruits_7.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "lemon",
  },
  {
    id: 8,
    img: "./img/fruits_8.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "fruits",
  },
  {
    id: 9,
    img: "./img/fruits_9.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "lemon",
  },
  {
    id: 10,
    img: "./img/fruits_10.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "green_veg",
  },
  {
    id: 11,
    img: "./img/fruits_11.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "onion",
  },
  {
    id: 12,
    img: "./img/fruits_12.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "onion",
  },
];

const accessoriesContainerEl = document.querySelector(".accessories_container");
const btnFilterAccessoriesEl = document.querySelectorAll(
  "#btn_filter_accessories"
);

window.addEventListener("DOMContentLoaded", () => {
  menuAccessoriesDisplayItem(accessories);
});

btnFilterAccessoriesEl.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const accessoriesLoad = e.currentTarget.dataset.id;

    const accessoriesCategory = accessories.filter((filterAccessoriesItem) => {
      if (filterAccessoriesItem.accessoriesCategory === accessoriesLoad) {
        return filterAccessoriesItem;
      }
    });
    menuAccessoriesDisplayItem(accessoriesCategory);
  });
});

btnFilterAccessoriesEl.forEach((btnAccessories) => {
  btnAccessories.addEventListener("click", (e) => {
    const accessoriesload = e.currentTarget.dataset.id;
    const accessoriesCategory = accessories.filter((filterAccessoriesItem) => {
      if (filterAccessoriesItem.category === accessoriesload) {
        return filterAccessoriesItem;
      }
    });
    if (accessoriesload === "vegetable") {
      menuAccessoriesDisplayItem(menu);
    } else {
      menuAccessoriesDisplayItem(accessoriesCategory);
    }
  });
});

function menuAccessoriesDisplayItem(accessoriesItem) {
  let accessoriesDisplay = accessoriesItem.map((itemAccessories) => {
    return `
   <div>
        <div class="cursor-pointer accessories_fruit_hover">
            <div class="accessories_ico flex justify-center items-center">
                <i class="fa-solid fa-heart text-3xl text-white absolute left-16 hover:text-orange-500"></i>
                <i class="fa-solid fa-bag-shopping text-3xl text-white absolute hover:text-orange-500 cart_add"></i>
                <i class="fa-solid fa-eye text-3xl text-white absolute right-16 hover:text-orange-500"></i>
            </div>
          <img src="${itemAccessories.img}" alt="">
          <h3 class="text-center font-semibold text-xl text-[#282828]">${itemAccessories.heading}</h3>
          <div class="text-yellow-500 my-2 text-center">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
          </div>
          <h3 class="text-center font-semibold text-xl text-[#282828]">${itemAccessories.paragraph}</h3>
      </div>
      </div>
  `;
  });
  accessoriesDisplay = accessoriesDisplay.join("");
  accessoriesContainerEl.innerHTML = accessoriesDisplay;
}

// shop menu item
const shop = [
  {
    id: 1,
    img: "./img/fruits_1.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "top_sale",
  },
  {
    id: 2,
    img: "./img/fruits_2.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "top_sale",
  },
  {
    id: 3,
    img: "./img/fruits_3.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest_item",
  },
  {
    id: 4,
    img: "./img/fruits_4.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "top_sale",
  },
  {
    id: 5,
    img: "./img/fruits_5.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest_item",
  },
  {
    id: 6,
    img: "./img/fruits_6.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest_item",
  },
  {
    id: 7,
    img: "./img/fruits_7.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest_item",
  },
  {
    id: 8,
    img: "./img/fruits_8.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "trendy_item",
  },
  {
    id: 9,
    img: "./img/fruits_9.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest_item",
  },
  {
    id: 10,
    img: "./img/fruits_10.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "trendy_item",
  },
  {
    id: 11,
    img: "./img/fruits_11.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "top_sale",
  },
  {
    id: 12,
    img: "./img/fruits_12.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "trendy_item",
  },
];

const ShopContainerEl = document.querySelector(".shop_container");
const btnFilterShopEl = document.querySelectorAll("#btn_filter_shop");

window.addEventListener("DOMContentLoaded", () => {
  const shopLoad = document.querySelectorAll("#btn_filter_shop")[0].dataset.id;

  const shopCategory = shop.filter((filterShopItem) => {
    if (filterShopItem.category === shopLoad) {
      return filterShopItem;
    }
  });
  menuShopDisplayItem(shopCategory);
});

btnFilterShopEl.forEach((btnShop) => {
  btnShop.addEventListener("click", (e) => {
    const categoryload = e.currentTarget.dataset.id;
    const shopCategory = shop.filter((filterShopItem) => {
      if (filterShopItem.category === categoryload) {
        return filterShopItem;
      }
    });
    menuShopDisplayItem(shopCategory);
  });
});

function menuShopDisplayItem(shopItem) {
  let shopDisplay = shopItem.map((itemShop) => {
    return `<div class="cursor-pointer hover:scale-105 shadow-2xl">
    <img src="${itemShop.img}" alt="">
    <div class="text-yellow-500 mb-3 text-center">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>
    <h1 class="text-[#282828] text-xl font-semibold ml-5">${itemShop.heading}</h1>
    <p class="text-[#969696] text-xl font-semibold ml-5">${itemShop.paragraph}</p>
</div>`;
  });
  shopDisplay = shopDisplay.join("");
  ShopContainerEl.innerHTML = shopDisplay;
}

// About
const slideEl = document.querySelectorAll(".slider");
// console.log(slideEl);
let indexEl = 0;

const leftEl = document.querySelector(".left_arrow");
const rightEl = document.querySelector(".right_arrow");

leftEl.addEventListener("click", () => {
  slideEl[indexEl].classList.remove("active");
  indexEl = (indexEl - 1 + slideEl.length) % slideEl.length;
  slideEl[indexEl].classList.add("active");
});

rightEl.addEventListener("click", () => {
  slideEl[indexEl].classList.remove("active");
  indexEl = (indexEl + 1) % slideEl.length;
  slideEl[indexEl].classList.add("active");
});

// cart item
const cartAddEl = document.querySelector(".cart_add");
