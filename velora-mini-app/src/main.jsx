import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const items=[
 {name:'Royal Nuts Box',price:25},
 {name:'Oriental Dates',price:12},
 {name:'Golden Gift Set',price:39}
];

function App(){
 const [cart,setCart]=useState([]);
 const add=x=>setCart([...cart,x]);
 const total=cart.reduce((s,x)=>s+x.price,0);
 return <main>
 <h1>VELORA</h1>
 <p>Premium nuts & oriental desserts</p>
 {items.map((x)=><article key={x.name}><h3>{x.name}</h3><b>{x.price} €</b><button onClick={()=>add(x)}>Добавить</button></article>)}
 <footer>Корзина: {cart.length} | {total} €</footer>
 </main>
}

createRoot(document.getElementById('root')).render(<App/>);
