import products from './products.json';

export function getProducts(){
  return products;
}

export function getProduct(id){
  return products.find(p=>p.id===id);
}
