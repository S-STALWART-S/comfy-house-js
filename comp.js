let h3,
  dialog,
  buyCart,
  clearCart,
  cartItems,
  clearCarts,
  totalP = 0,
  totalPrice,
  basketCounter = 0,
  cartC = [],
  factor = [],
  fcPrice = [],
  removeItem = [],
  productSelected = [],
  shopWindowCartItem = [],
  carts = [
    {
      id: 1,
      title: "queen panel bed",
      price: 10.99,
      src: "./images/product-1.jpeg",
      numInFactor: 0,
      adToCart: true,
      numInStock: 12,
    },
    {
      id: 2,
      title: "king panel bed",
      price: 12.99,
      src: "./images/product-2.jpeg",
      numInFactor: 0,
      adToCart: true,
      numInStock: 15,
    },
    {
      id: 3,
      title: "single panel bed",
      price: 12.99,
      src: "./images/product-3.jpeg",
      numInFactor: 0,
      adToCart: true,
      numInStock: 13,
    },
    {
      id: 4,
      title: "twin panel bed",
      price: 22.99,
      src: "./images/product-4.jpeg",
      numInFactor: 0,
      adToCart: true,
      numInStock: 14,
    },
    {
      id: 5,
      title: "fridge",
      price: 88.99,
      src: "./images/product-5.jpeg",
      numInFactor: 0,
      adToCart: true,
      numInStock: 10,
    },
    {
      id: 6,
      title: "dresser",
      price: 32.99,
      src: "./images/product-6.jpeg",
      numInFactor: 0,
      adToCart: true,
      numInStock: 0,
    },
    {
      id: 7,
      title: "couch",
      price: 45.99,
      src: "./images/product-7.jpeg",
      numInFactor: 0,
      adToCart: true,
      numInStock: 20,
    },
    {
      id: 8,
      title: "table",
      price: 33.99,
      src: "./images/product-8.jpeg",
      numInFactor: 0,
      adToCart: true,
      numInStock: 25,
    },
  ];

class BuilderMachine {
  constructor(targetName) {
    this.elem = document.createElement(targetName);
    this.value = function (value) {
      this.elem.value = value;
      return this;
    };
    this.text = function (text) {
      this.elem.textContent = text;
      return this;
    };
    this.href = function (href) {
      this.elem.href = href;
      return this;
    };
    this.style = function (style) {
      this.elem.style = style;
      return this;
    };
    this.type = function (type) {
      this.elem.type = type;
      return this;
    };
    this.innerHTML = function (innerHTML) {
      this.elem.innerHTML = innerHTML;
      return this;
    };
    this.append = function (parent) {
      if (parent instanceof BuilderMachine) {
        parent.build().appendChild(this.elem);
        return this;
      } else parent.appendChild(this.elem);
      return this;
    };
    this.build = function () {
      return this.elem;
    };
    this.placeHolder = function (placeholder) {
      this.elem.placeholder = placeholder;
      return this;
    };
    this.id = function (id) {
      this.elem.id = id;
      return this;
    };
    // this.remAtr = function (atr) {
    //   this.elem.removeAttribute = atr;
    //   return this;
    // };
    this.disable = function (disable) {
      this.elem.disabled = disable;
      return this;
    };
    this.hider = function () {
      this.elem.style = "display:none";
      return this;
    };
    this.shower = function () {
      this.elem.style = "display:block";
      return this;
    };
    this.class = function (className) {
      this.elem.className = className;
      return this;
    };
    this.checked = function (classChecked) {
      this.elem.className = classChecked;
      return this;
    };
    this.onClick = function (func) {
      this.elem.onclick = func;
      return this;
    };
    this.src = function (src) {
      this.elem.src = src;
      return this;
    };
    this.alt = function (alt) {
      this.elem.alt = alt;
      return this;
    };
  }
}

let builder = {
  create: function (targetName) {
    return new BuilderMachine(targetName);
  },
};

class Head {
  constructor(root) {
    this.root = root;
    this.func = new Func();
  }
  renderH() {
    this.root.innerHTML = "";
    let navbarParent = builder
      .create("div")
      .class("navbar")
      .id("ourH")
      .append(this.root);
    let navbarTag = builder.create("nav").class("navbar").append(navbarParent);
    let navbarContent = builder
      .create("div")
      .class("navbar-center")
      .append(navbarTag);
    let logoSpan = builder
      .create("span")
      .class("nav-icon")
      .append(navbarContent);
    builder.create("i").class("fas fa-bars").append(logoSpan);
    builder
      .create("img")
      .src("./images/logo.svg")
      .alt("store logo")
      .append(navbarContent);
    let counterDiv = builder
      .create("div")
      .class("cart-btn")
      .append(navbarContent);
    let counterSpan = builder
      .create("span")
      .class("nav-icon")
      .append(counterDiv);
    builder
      .create("i")
      .class("  fas fa-cart-plus basket")
      .onClick(() => {
        this.func.trans(true);
      })
      .append(counterSpan);
    cartItems = builder
      .create("div")
      .class("cart-items")
      .append(counterDiv)
      .text(basketCounter);
    let headerParent = builder.create("div").append(this.root);
    let headerContent = builder
      .create("header")
      .class("hero")
      .append(headerParent);
    let bannerDiv = builder.create("div").class("banner").append(headerContent);
    builder
      .create("h1")
      .class("banner-title")
      .text("furniture collection")
      .append(bannerDiv);
    builder
      .create("button")
      .class("banner-btn")
      .text("shop now")
      .onClick(() => {
        this.func.trans();
      })
      .append(bannerDiv);
    builder.create("a").id("button").append(bannerDiv);
    let sectionParent = builder
      .create("div")
      .id("sectionParent")
      .append(this.root);
    let sectionContent = builder
      .create("section")
      .class("products")
      .append(sectionParent);
    let sectionHeader = builder
      .create("div")
      .class("section-title")
      .append(sectionContent);
    builder.create("h2").id("ourP").text("Our Products").append(sectionHeader);
    let shopWindowParent = builder
      .create("div")
      .class("cart-overlay")
      .append(this.root);
    return sectionContent, shopWindowParent;
  }
}
class Products {
  constructor(sectionContent) {
    this.sectionContent = sectionContent;
    this.factorA = new Factor();
    this.func = new Func();
  }
  renderP() {
    let articleParent = builder
      .create("div")
      .class("products-center")
      .append(this.sectionContent);
    carts.forEach((cart) => {
      let articleContent = builder
        .create("article")
        .class("product")
        .append(articleParent);
      let imgContent = builder
        .create("div")
        .class("img-container")
        .append(articleContent);
      builder
        .create("img")
        .class("product-img")
        .src(cart.src)
        .append(imgContent);
      let addBtn = builder
        .create("button")
        .text(` ${cart.price} `)
        .class("bag-btn")
        .onClick(() => {
          this.func.add(cart);
        })
        .append(imgContent);
      builder
        .create("i")
        .class("fas fa-shopping-cart")
        .text("Add to cart")
        .append(addBtn);
      productSelected[cart.id - 1] = builder
        .create("i")
        .class("fas fa-shopping-cart")
        .append(addBtn);
      builder.create("h3").text(cart.title).append(articleContent);
    });
  }
}
class Factor {
  constructor(shopWindowParent) {
    this.shopWindowParent = shopWindowParent;
    this.func = new Func();
  }
  renderF() {
    let shopWindowContent = builder
      .create("div")
      .class("cart")
      .append(this.shopWindowParent);
    let closeBtn = builder
      .create("span")
      .class("close-cart")
      .append(shopWindowContent);
    builder
      .create("i")
      .class("far fa-window-close")
      .onClick(() => {
        this.func.trans(false);
      })
      .append(closeBtn);
    builder.create("h2").text("your cart").append(shopWindowContent);
    let shopWindowCartContent = builder
      .create("div")
      .class("cart-content")
      .append(shopWindowContent);
    clearCarts = builder.create("div").append(shopWindowCartContent);
    let shopWindowCartFooter = builder
      .create("div")
      .class("cart-footer")
      .append(shopWindowContent);
    let headerTotalPrice = builder
      .create("h3")
      .text("your total :  $")
      .append(shopWindowCartFooter);
    totalPrice = builder
      .create("span")
      .class("cart-total")
      .text(totalP)
      .append(headerTotalPrice);
    clearCart = builder
      .create("button")
      .class("clear-cart banner-btn")
      .style("width:80%")
      .text("clear cart")
      .onClick(() => {
        this.func.clear();
      })
      .append(shopWindowCartFooter)
      .build();
    buyCart = builder
      .create("button")
      .class("clear-cart banner-btn")
      .text("Buy cart...!")
      .style("width:80%")
      .onClick(() => {
        this.func.trans(false);
        setTimeout(() => {
          dialog.showModal();
        }, 550);
      })
      .append(shopWindowCartFooter)
      .build();
    this.func.cont(false);
  }
}
class ShopC {
  constructor(root) {
    this.root = root;
    this.func = new Func();
  }
  shop() {
    dialog = builder
      .create("dialog")
      .style("width: 622px;height: auto;")
      .class("mdl-dialog")
      .append(this.root)
      .build();
    let divD = builder.create("div").id("shop").append(dialog);
    builder
      .create("h4")
      .style("text-align:center;font-size:20px;")
      .class("mdl-dialog__title")
      .text("Please confirm your purchase...😃")
      .append(divD);
    let divC = builder.create("div").class("mdl-dialog__content").append(divD);
    let h6 = builder
      .create("h6")
      .style("text-align:center;color: black;")
      .text("total Price is 👇")
      .append(divC);
    h3 = builder
      .create("h1")
      .text(`${Math.round(totalP)} $`)
      .append(h6);
    let divB = builder.create("div").class("mdl-dialog__actions").append(divD);
    builder
      .create("button")
      .id("confirm")
      .class("mdl-button")
      .text("Confirm")
      .onClick((e) => {
        this.func.shop(e);
      })
      .append(divB);
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
  }
}
