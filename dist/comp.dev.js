"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var h3,
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
    carts = [{
  id: 1,
  title: "queen panel bed",
  price: 10.99,
  src: "./images/product-1.jpeg",
  numInFactor: 0,
  adToCart: true,
  numInStock: 12
}, {
  id: 2,
  title: "king panel bed",
  price: 12.99,
  src: "./images/product-2.jpeg",
  numInFactor: 0,
  adToCart: true,
  numInStock: 15
}, {
  id: 3,
  title: "single panel bed",
  price: 12.99,
  src: "./images/product-3.jpeg",
  numInFactor: 0,
  adToCart: true,
  numInStock: 13
}, {
  id: 4,
  title: "twin panel bed",
  price: 22.99,
  src: "./images/product-4.jpeg",
  numInFactor: 0,
  adToCart: true,
  numInStock: 14
}, {
  id: 5,
  title: "fridge",
  price: 88.99,
  src: "./images/product-5.jpeg",
  numInFactor: 0,
  adToCart: true,
  numInStock: 10
}, {
  id: 6,
  title: "dresser",
  price: 32.99,
  src: "./images/product-6.jpeg",
  numInFactor: 0,
  adToCart: true,
  numInStock: 0
}, {
  id: 7,
  title: "couch",
  price: 45.99,
  src: "./images/product-7.jpeg",
  numInFactor: 0,
  adToCart: true,
  numInStock: 20
}, {
  id: 8,
  title: "table",
  price: 33.99,
  src: "./images/product-8.jpeg",
  numInFactor: 0,
  adToCart: true,
  numInStock: 25
}];

var BuilderMachine = function BuilderMachine(targetName) {
  _classCallCheck(this, BuilderMachine);

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
  }; // this.remAtr = function (atr) {
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

  this["class"] = function (className) {
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
};

var builder = {
  create: function create(targetName) {
    return new BuilderMachine(targetName);
  }
};

var Head =
/*#__PURE__*/
function () {
  function Head(root) {
    _classCallCheck(this, Head);

    this.root = root;
    this.func = new Func();
  }

  _createClass(Head, [{
    key: "renderH",
    value: function renderH() {
      var _this = this;

      this.root.innerHTML = "";
      var navbarParent = builder.create("div")["class"]("navbar").id("ourH").append(this.root);
      var navbarTag = builder.create("nav")["class"]("navbar").append(navbarParent);
      var navbarContent = builder.create("div")["class"]("navbar-center").append(navbarTag);
      var logoSpan = builder.create("span")["class"]("nav-icon").append(navbarContent);
      builder.create("i")["class"]("fas fa-bars").append(logoSpan);
      builder.create("img").src("./images/logo.svg").alt("store logo").append(navbarContent);
      var counterDiv = builder.create("div")["class"]("cart-btn").append(navbarContent);
      var counterSpan = builder.create("span")["class"]("nav-icon").append(counterDiv);
      builder.create("i")["class"]("  fas fa-cart-plus basket").onClick(function () {
        _this.func.trans(true);
      }).append(counterSpan);
      cartItems = builder.create("div")["class"]("cart-items").append(counterDiv).text(basketCounter);
      var headerParent = builder.create("div").append(this.root);
      var headerContent = builder.create("header")["class"]("hero").append(headerParent);
      var bannerDiv = builder.create("div")["class"]("banner").append(headerContent);
      builder.create("h1")["class"]("banner-title").text("furniture collection").append(bannerDiv);
      builder.create("button")["class"]("banner-btn").text("shop now").onClick(function () {
        _this.func.trans();
      }).append(bannerDiv);
      builder.create("a").id("button").append(bannerDiv);
      var sectionParent = builder.create("div").id("sectionParent").append(this.root);
      var sectionContent = builder.create("section")["class"]("products").append(sectionParent);
      var sectionHeader = builder.create("div")["class"]("section-title").append(sectionContent);
      builder.create("h2").id("ourP").text("Our Products").append(sectionHeader);
      var shopWindowParent = builder.create("div")["class"]("cart-overlay").append(this.root);
      return sectionContent, shopWindowParent;
    }
  }]);

  return Head;
}();

var Products =
/*#__PURE__*/
function () {
  function Products(sectionContent) {
    _classCallCheck(this, Products);

    this.sectionContent = sectionContent;
    this.factorA = new Factor();
    this.func = new Func();
  }

  _createClass(Products, [{
    key: "renderP",
    value: function renderP() {
      var _this2 = this;

      var articleParent = builder.create("div")["class"]("products-center").append(this.sectionContent);
      carts.forEach(function (cart) {
        var articleContent = builder.create("article")["class"]("product").append(articleParent);
        var imgContent = builder.create("div")["class"]("img-container").append(articleContent);
        builder.create("img")["class"]("product-img").src(cart.src).append(imgContent);
        var addBtn = builder.create("button").text(" ".concat(cart.price, " "))["class"]("bag-btn").onClick(function () {
          _this2.func.add(cart);
        }).append(imgContent);
        builder.create("i")["class"]("fas fa-shopping-cart").text("Add to cart").append(addBtn);
        productSelected[cart.id - 1] = builder.create("i")["class"]("fas fa-shopping-cart").append(addBtn);
        builder.create("h3").text(cart.title).append(articleContent);
      });
    }
  }]);

  return Products;
}();

var Factor =
/*#__PURE__*/
function () {
  function Factor(shopWindowParent) {
    _classCallCheck(this, Factor);

    this.shopWindowParent = shopWindowParent;
    this.func = new Func();
  }

  _createClass(Factor, [{
    key: "renderF",
    value: function renderF() {
      var _this3 = this;

      var shopWindowContent = builder.create("div")["class"]("cart").append(this.shopWindowParent);
      var closeBtn = builder.create("span")["class"]("close-cart").append(shopWindowContent);
      builder.create("i")["class"]("far fa-window-close").onClick(function () {
        _this3.func.trans(false);
      }).append(closeBtn);
      builder.create("h2").text("your cart").append(shopWindowContent);
      var shopWindowCartContent = builder.create("div")["class"]("cart-content").append(shopWindowContent);
      clearCarts = builder.create("div").append(shopWindowCartContent);
      var shopWindowCartFooter = builder.create("div")["class"]("cart-footer").append(shopWindowContent);
      var headerTotalPrice = builder.create("h3").text("your total :  $").append(shopWindowCartFooter);
      totalPrice = builder.create("span")["class"]("cart-total").text(totalP).append(headerTotalPrice);
      clearCart = builder.create("button")["class"]("clear-cart banner-btn").style("width:80%").text("clear cart").onClick(function () {
        _this3.func.clear();
      }).append(shopWindowCartFooter).build();
      buyCart = builder.create("button")["class"]("clear-cart banner-btn").text("Buy cart...!").style("width:80%").onClick(function () {
        _this3.func.trans(false);

        setTimeout(function () {
          dialog.showModal();
        }, 550);
      }).append(shopWindowCartFooter).build();
      this.func.cont(false);
    }
  }]);

  return Factor;
}();

var ShopC =
/*#__PURE__*/
function () {
  function ShopC(root) {
    _classCallCheck(this, ShopC);

    this.root = root;
    this.func = new Func();
  }

  _createClass(ShopC, [{
    key: "shop",
    value: function shop() {
      var _this4 = this;

      dialog = builder.create("dialog").style("width: 622px;height: auto;")["class"]("mdl-dialog").append(this.root).build();
      var divD = builder.create("div").id("shop").append(dialog);
      builder.create("h4").style("text-align:center;font-size:20px;")["class"]("mdl-dialog__title").text("Please confirm your purchase...😃").append(divD);
      var divC = builder.create("div")["class"]("mdl-dialog__content").append(divD);
      var h6 = builder.create("h6").style("text-align:center;color: black;").text("total Price is 👇").append(divC);
      h3 = builder.create("h1").text("".concat(Math.round(totalP), " $")).append(h6);
      var divB = builder.create("div")["class"]("mdl-dialog__actions").append(divD);
      builder.create("button").id("confirm")["class"]("mdl-button").text("Confirm").onClick(function (e) {
        _this4.func.shop(e);
      }).append(divB);

      if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
    }
  }]);

  return ShopC;
}();