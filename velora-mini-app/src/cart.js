export function addToCart(cart, product){
 return [...cart, product];
}

export function removeFromCart(cart, id){
 return cart.filter(item=>item.id!==id);
}

export function getTotal(cart){
 return cart.reduce((sum,item)=>sum+item.price,0);
}
