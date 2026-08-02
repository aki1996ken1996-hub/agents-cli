const products=[
{name:'Финики Premium',price:12},
{name:'Ореховый набор',price:25},
{name:'Восточная коллекция',price:35}
];
let count=0;
const root=document.getElementById('products');
products.forEach(p=>{root.innerHTML+=`<div class="card"><h3>${p.name}</h3><div class="price">${p.price} €</div><button onclick="add()">Добавить</button></div>`});
function add(){count++;document.getElementById('cart').innerText=count}
function checkout(){
 if(window.Telegram?.WebApp){Telegram.WebApp.showAlert('Спасибо! Заказ принят в VELORA');}
 else alert('Демо заказ VELORA создан');
}
if(window.Telegram?.WebApp){Telegram.WebApp.ready();Telegram.WebApp.expand();}
