export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addToCart(productId)  {
  const selectQuantity = Number(document.querySelector(`.js-select-quantity-${productId}`).value);

  let matching;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matching = item;
    }
  });

  if (matching) {
    matching.quantity += selectQuantity;
  } else  {
    cart.push({
      productId: productId,
      quantity: selectQuantity
    });
  }

  console.log(cart);

  localStorage.setItem('cart', JSON.stringify(cart));
}