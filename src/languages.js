export class Language {
  constructor(language) {
    this.language = language;
  }
}

export const sidebarWords = [
  new Language(["아침메뉴", "Breakfast"]),
  new Language(["점심메뉴", "Lunch"]),
  new Language(["저녁메뉴", "Dinner"]),
  new Language(["사이드메뉴", "Sides"]),
  new Language(["음료", "Beverage"]),
  new Language(["주류", "Liquor"]),
  new Language(["기타", "Others"]),
  new Language(["장바구니", "Cart List"]),
  new Language(["주문하기", "Order"]),
];

export const paymentWords = [
  new Language(["메뉴", "Menu"]),
  new Language(["수량", "Count"]),
  new Language(["가격", "Price"]),
  new Language(["합계", "Sum"]),
  new Language(["주문한 내역이 없습니다", "No details of your order"]),
  new Language(["최종금액", "Total Price"]),
  new Language(["카운터 직접 결제", "Pay at counter"]),
  new Language(["카카오 간편결제", "Kakao Payment"]),
  new Language(["토스 간편결제", "Toss Payment"]),
  new Language(["카드결제", "Card Payment"]),
  new Language(["실시간 계좌이체", "Bank Transfer"]),
];

export const modalWords = [
  new Language(["주문이 완료되었습니다", "Your order has been placed"]),
  new Language([
    "카운터에서 직접 결제하시면 됩니다",
    "You can pay at the counter",
  ]),
];
