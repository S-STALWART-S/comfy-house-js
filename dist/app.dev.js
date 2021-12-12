"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Func =
/*#__PURE__*/
function () {
  function Func() {
    _classCallCheck(this, Func);
  }

  _createClass(Func, [{
    key: "trans",
    value: function trans(value) {
      var factorContainer = document.querySelector(".cart-overlay");
      var factor = document.querySelector(".cart");
      var btn = $("#button");
      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
          scrollTop: 0
        }, "300");
      });

      if (value) {
        factorContainer.classList.add("transparentBcg");
        factor.classList.add("showCart");
      } else {
        factorContainer.classList.remove("transparentBcg");
        factor.classList.remove("showCart");
      }

      if (value == undefined) {
        var element = document.getElementById("ourP");
        element.scrollIntoView();
      }
    }
  }, {
    key: "shop",
    value: function shop(e) {
      var _this = this;

      dialog.close();
      e.stopPropagation();
      carts.forEach(function (cart) {
        cart.numInStock -= cart.numInFactor;
      });
      setTimeout(function () {
        _this.clear();
      }, 200);
    }
  }, {
    key: "add",
    value: function add(cart) {
      var _this2 = this;

      if (cart.numInFactor < cart.numInStock) {
        this.inc(cart);
        this.cont(true);
        var addedOrNot = factor.find(function (card) {
          return card.id == cart.id;
        });
        !addedOrNot ? factor.push(cart) : "";
        factor.forEach(function (card) {
          if (card.adToCart) {
            shopWindowCartItem[card.id] = builder.create("div")["class"]("cart-item").append(clearCarts);
            builder.create("img").src(card.src).append(shopWindowCartItem[card.id]);
            var cartContainer = builder.create("div").append(shopWindowCartItem[card.id]);
            builder.create("h4").text(card.title).append(cartContainer);
            fcPrice[card.id] = builder.create("h5").text(card.price).append(cartContainer);
            removeItem[card.id] = builder.create("span").text("Remove")["class"]("remove-item").onClick(function () {
              _this2.remove(card);
            }).append(cartContainer);
            var cartContainerC = builder.create("div").append(shopWindowCartItem[card.id]);
            builder.create("i")["class"]("fas fa-chevron-up").onClick(function () {
              _this2.plus(card);
            }).append(cartContainerC);
            cartC[card.id] = builder.create("p")["class"]("item-amount").text(card.numInFactor).append(cartContainerC);
            builder.create("i")["class"]("fas fa-chevron-down").onClick(function () {
              _this2.minus(card);
            }).append(cartContainerC);
            card.adToCart = false;
          } else {
            fcPrice[card.id].text(Math.round(card.price * card.numInFactor));
            cartC[card.id].text(card.numInFactor);
          }
        });
      }
    }
  }, {
    key: "remove",
    value: function remove(card) {
      var index = factor.findIndex(function (value) {
        return value.id === card.id;
      });
      factor.splice(index, 1);
      removeItem[card.id].id(card.id);
      var removeTGT = document.getElementById(card.id);
      var cartUpd = carts.find(function (value) {
        return value.id == removeTGT.id;
      });
      basketCounter -= cartUpd.numInFactor;
      cartUpd.adToCart = true;
      cartUpd.numInFactor = 0;
      totalP = 0;
      factor.forEach(function (card) {
        totalP += card.price * card.numInFactor;
      });
      totalPrice.text(Math.round(totalP));
      cartItems.text(basketCounter);
      removeTGT.removeAttribute("id");
      productSelected[card.id - 1].text();
      var x = shopWindowCartItem[card.id].build();
      x.parentNode.removeChild(x);
      this.cont(false);
    }
  }, {
    key: "clear",
    value: function clear() {
      totalP = 0;
      factor = [];
      basketCounter = 0;
      carts.forEach(function (cart) {
        cart.numInFactor = 0;
        cart.adToCart = true;
      });
      this.trans(false);
      setTimeout(function () {
        app.render();
      }, 400);
    }
  }, {
    key: "inc",
    value: function inc(cart) {
      ++basketCounter;
      cartItems.text(basketCounter);
      ++cart.numInFactor;
      productSelected[cart.id - 1].text(" ".concat(cart.numInFactor, " "));
      totalP = 0;
      carts.forEach(function (cart) {
        totalP += cart.price * cart.numInFactor;
      });
      h3.text("".concat(Math.round(totalP), " $"));
      totalPrice.text(Math.round(totalP));
    }
  }, {
    key: "plus",
    value: function plus(card) {
      if (card.numInFactor < card.numInStock) {
        ++basketCounter;
        cartItems.text(basketCounter);
        ++card.numInFactor;
        productSelected[card.id - 1].text(" ".concat(card.numInFactor, " "));
        fcPrice[card.id].text(Math.round(card.price * card.numInFactor));
        cartC[card.id].text(card.numInFactor);
        totalP = 0;
        factor.forEach(function (card) {
          totalP += card.price * card.numInFactor;
        });
        h3.text("".concat(Math.round(totalP), " $"));
        totalPrice.text(Math.round(totalP));
      }
    }
  }, {
    key: "minus",
    value: function minus(card) {
      if (card.numInFactor > 1) {
        --basketCounter;
        cartItems.text(basketCounter);
        --card.numInFactor;
        cartC[card.id].text(card.numInFactor);
        fcPrice[card.id].text(Math.round(card.price * card.numInFactor));
        productSelected[card.id - 1].text(" ".concat(card.numInFactor, " "));
        totalP = 0;
        factor.forEach(function (card) {
          totalP += card.price * card.numInFactor;
        });
        h3.text("".concat(Math.round(totalP), " $"));
        totalPrice.text(Math.round(totalP));
      } else this.remove(card);
    }
  }, {
    key: "cont",
    value: function cont(value) {
      if (value) {
        buyCart.removeAttribute("disabled", "disabled");
        clearCart.removeAttribute("disabled", "disabled");
      } else if (!factor.length) {
        buyCart.setAttribute("disabled", "disabled");
        clearCart.setAttribute("disabled", "disabled");
      }
    }
  }]);

  return Func;
}();

var App =
/*#__PURE__*/
function () {
  function App(root) {
    _classCallCheck(this, App);

    this.root = root;
    this.head = new Head(this.root);
    this.products = new Products(this.root);
    this.shopC = new ShopC(this.root);
    this.factor = new Factor(this.root);
    this.func = new Func();
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      this.head.renderH();
      this.products.renderP();
      this.factor.renderF();
      this.shopC.shop();
      this.func.trans(false);
    }
  }]);

  return App;
}();

var app = new App(document.getElementById("root"));
app.render();