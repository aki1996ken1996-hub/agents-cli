export default function Checkout({cart}){
 const total=cart.reduce((s,i)=>s+i.price,0);
 return <section>
  <h2>Оформление заказа</h2>
  <p>Товаров: {cart.length}</p>
  <p>Сумма: {total} €</p>
  <button>Отправить заказ</button>
 </section>
}
