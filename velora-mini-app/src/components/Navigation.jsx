export default function Navigation({page,setPage}){
 return <nav>
  <button onClick={()=>setPage('home')}>Главная</button>
  <button onClick={()=>setPage('catalog')}>Каталог</button>
  <button onClick={()=>setPage('cart')}>Корзина</button>
  <button onClick={()=>setPage('profile')}>Профиль</button>
 </nav>
}
