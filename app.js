class Func {
  constructor() {}
  trans(value) {
    let factorContainer = document.querySelector(".cart-overlay");
    let factor = document.querySelector(".cart");
    let btn = $("#button");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });
    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
    if (value) {
      factorContainer.classList.add("transparentBcg");
      factor.classList.add("showCart");
    } else {
      factorContainer.classList.remove("transparentBcg");
      factor.classList.remove("showCart");
    }
    if (value == undefined) {
      let element = document.getElementById("ourP");
      element.scrollIntoView();
    }
  }
  shop(e) {
    dialog.close();
    e.stopPropagation();
    carts.forEach((cart) => {
      cart.numInStock -= cart.numInFactor;
    });
    setTimeout(() => {
      this.clear();
    }, 200);
  }
  add(cart) {
    if (cart.numInFactor < cart.numInStock) {
      this.inc(cart);
      this.cont(true);
      let addedOrNot = factor.find((card) => {
        return card.id == cart.id;
      });
      !addedOrNot ? factor.push(cart) : "";
      factor.forEach((card) => {
        if (card.adToCart) {
          shopWindowCartItem[card.id] = builder
            .create("div")
            .class("cart-item")
            .append(clearCarts);
          builder
            .create("img")
            .src(card.src)
            .append(shopWindowCartItem[card.id]);
          let cartContainer = builder
            .create("div")
            .append(shopWindowCartItem[card.id]);
          builder.create("h4").text(card.title).append(cartContainer);
          fcPrice[card.id] = builder
            .create("h5")
            .text(card.price)
            .append(cartContainer);
          removeItem[card.id] = builder
            .create("span")
            .text("Remove")
            .class("remove-item")
            .onClick(() => {
              this.remove(card);
            })
            .append(cartContainer);
          let cartContainerC = builder
            .create("div")
            .append(shopWindowCartItem[card.id]);
          builder
            .create("i")
            .class("fas fa-chevron-up")
            .onClick(() => {
              this.plus(card);
            })
            .append(cartContainerC);
          cartC[card.id] = builder
            .create("p")
            .class("item-amount")
            .text(card.numInFactor)
            .append(cartContainerC);
          builder
            .create("i")
            .class("fas fa-chevron-down")
            .onClick(() => {
              this.minus(card);
            })
            .append(cartContainerC);
          card.adToCart = false;
        } else {
          fcPrice[card.id].text(Math.round(card.price * card.numInFactor));
          cartC[card.id].text(card.numInFactor);
        }
      });
    }
  }
  remove(card) {
    let index = factor.findIndex((value) => {
      return value.id === card.id;
    });
    factor.splice(index, 1);
    removeItem[card.id].id(card.id);
    let removeTGT = document.getElementById(card.id);
    let cartUpd = carts.find((value) => {
      return value.id == removeTGT.id;
    });
    basketCounter -= cartUpd.numInFactor;
    cartUpd.adToCart = true;
    cartUpd.numInFactor = 0;
    totalP = 0;
    factor.forEach((card) => {
      totalP += card.price * card.numInFactor;
    });
    totalPrice.text(Math.round(totalP));
    cartItems.text(basketCounter);
    removeTGT.removeAttribute("id");
    productSelected[card.id - 1].text();
    let x = shopWindowCartItem[card.id].build();
    x.parentNode.removeChild(x);
    this.cont(false);
  }
  clear() {
    totalP = 0;
    factor = [];
    basketCounter = 0;
    carts.forEach((cart) => {
      cart.numInFactor = 0;
      cart.adToCart = true;
    });
    this.trans(false);
    setTimeout(() => {
      app.render();
    }, 400);
  }
  inc(cart) {
    ++basketCounter;
    cartItems.text(basketCounter);
    ++cart.numInFactor;
    productSelected[cart.id - 1].text(` ${cart.numInFactor} `);
    totalP = 0;
    carts.forEach((cart) => {
      totalP += cart.price * cart.numInFactor;
    });
    h3.text(`${Math.round(totalP)} $`);
    totalPrice.text(Math.round(totalP));
  }

  plus(card) {
    if (card.numInFactor < card.numInStock) {
      ++basketCounter;
      cartItems.text(basketCounter);
      ++card.numInFactor;
      productSelected[card.id - 1].text(` ${card.numInFactor} `);
      fcPrice[card.id].text(Math.round(card.price * card.numInFactor));
      cartC[card.id].text(card.numInFactor);
      totalP = 0;
      factor.forEach((card) => {
        totalP += card.price * card.numInFactor;
      });
      h3.text(`${Math.round(totalP)} $`);
      totalPrice.text(Math.round(totalP));
    }
  }
  minus(card) {
    if (card.numInFactor > 1) {
      --basketCounter;
      cartItems.text(basketCounter);
      --card.numInFactor;
      cartC[card.id].text(card.numInFactor);
      fcPrice[card.id].text(Math.round(card.price * card.numInFactor));
      productSelected[card.id - 1].text(` ${card.numInFactor} `);
      totalP = 0;
      factor.forEach((card) => {
        totalP += card.price * card.numInFactor;
      });
      h3.text(`${Math.round(totalP)} $`);
      totalPrice.text(Math.round(totalP));
    } else this.remove(card);
  }
  cont(value) {
    if (value) {
      buyCart.removeAttribute("disabled", "disabled");
      clearCart.removeAttribute("disabled", "disabled");
    } else if (!factor.length) {
      buyCart.setAttribute("disabled", "disabled");
      clearCart.setAttribute("disabled", "disabled");
    }
  }
}
class App {
  constructor(root) {
    this.root = root;
    this.head = new Head(this.root);
    this.products = new Products(this.root);
    this.shopC = new ShopC(this.root);
    this.factor = new Factor(this.root);
    this.func = new Func();
  }
  render() {
    this.head.renderH();
    this.products.renderP();
    this.factor.renderF();
    this.shopC.shop();
    this.func.trans(false);
  }
}

const app = new App(document.getElementById("root"));
app.render();
