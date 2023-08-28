import {cart, addToCart} from '../scripts/cart.js';
import {products} from '../scripts/data.js';
import {formatCurrency} from './utils/money.js';


let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
          <div class="product-div">
          <div class="product-image-div">
            <img  
                  src=" ${product.image}">
          </div>
          <div class="product-detail">
            <h4>${product.name}</h4>
            <p>$${formatCurrency(product.priceCents)}</p>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>  
            <div class="add-to-cart-button-div">
              <button class="js-add-to-cart"
              data-product-id = "${product.id}">Add to Cart</button>         
            </div>  
            </div>
        </div>          
  `;
});

  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity;      
    });
 
    document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
  }

  document.querySelectorAll('.js-add-to-cart')
  .forEach((button) =>{
    button.addEventListener('click', ()=>{
      const productId = button.dataset.productId;
          addToCart(productId);
          updateCartQuantity();            
    });
  });