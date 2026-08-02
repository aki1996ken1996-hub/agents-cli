export function createOrder(cart, user){
  return {
    id: Date.now(),
    user: user || 'telegram_guest',
    items: cart,
    total: cart.reduce((sum,item)=>sum+item.price,0),
    status: 'new'
  };
}

export function sendOrderToTelegram(order){
  const tg = window.Telegram?.WebApp;
  if(tg){
    tg.showAlert(`Заказ VELORA №${order.id} создан`);
  }
}
