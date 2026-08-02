export function initTelegram(){
  const tg = window.Telegram?.WebApp;
  if(!tg) return null;
  tg.ready();
  tg.expand();
  return tg;
}

export function getTelegramUser(){
  const tg = window.Telegram?.WebApp;
  return tg?.initDataUnsafe?.user || null;
}
