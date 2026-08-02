export default function ProductCard({product,onAdd}){
 return <article className="product-card">
  <h3>{product.name}</h3>
  <p>{product.category}</p>
  <strong>{product.price} €</strong>
  <button onClick={()=>onAdd(product)}>Добавить</button>
 </article>
}
