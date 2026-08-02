import {useState} from 'react';

export default function Checkout({cart,onSubmit}){
 const [name,setName]=useState('');
 const [phone,setPhone]=useState('');
 return <section>
  <h2>Оформление заказа</h2>
  <input placeholder="Имя" value={name} onChange={e=>setName(e.target.value)}/>
  <input placeholder="Телефон" value={phone} onChange={e=>setPhone(e.target.value)}/>
  <button onClick={()=>onSubmit({name,phone,cart})}>Заказать</button>
 </section>
}
