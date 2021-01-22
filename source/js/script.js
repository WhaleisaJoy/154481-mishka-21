const mainNav = document.querySelector(".main-nav");
const mainNavToggle = document.querySelector(".main-nav__toggle");

const weekProductMakeOrderButton = document.querySelector(".week-product__make-order");
const cardProductAddToCart = document.querySelector(".card-product__add-to-cart");
const modalAddToCart = document.querySelector(".modal--add-to-cart");

if(mainNav)
{
  mainNav.classList.remove("main-nav--nojs");
}

if(mainNavToggle)
{
  mainNavToggle.addEventListener("click", function()
  {
    if(mainNav.classList.contains("main-nav--closed"))
    {
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--opened");
    }
    else
    {
      mainNav.classList.add("main-nav--closed");
      mainNav.classList.remove("main-nav--opened");
    }
  })
}


if(weekProductMakeOrderButton)
{
  weekProductMakeOrderButton.addEventListener("click", function(evt)
  {
    openModal(modalAddToCart, evt);
  })
}

if(modalAddToCart)
{
  modalAddToCart.addEventListener("click", function(evt)
  {
    closeModal(this, evt);
  })
}

if(cardProductAddToCart)
{
  cardProductAddToCart.addEventListener("click", function(evt)
  {
    openModal(modalAddToCart, evt);
  })
}

function openModal(modal, evt)
{
  if(!modal.classList.contains("modal--opened"))
  {
    evt.preventDefault();
    modal.classList.add("modal--opened");
  }
}

function closeModal(modal, evt)
{
  if(evt.target.classList.contains("modal") && evt.target.classList.contains("modal--opened"))
  {
    evt.preventDefault();
    modal.classList.remove("modal--opened");
  }
}
