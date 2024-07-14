/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function randomCard() {
    let cards = [
      "<p class='diamond'>♦</p>",
      "<p class='heart'>♥</p>",
      "<p class='spade'>♠</p>",
      "<p class='club'>♣</p>"
    ];
    let cardsIndex = Math.floor(Math.random() * cards.length);
    return cards[cardsIndex];
  }

  function randomNumber() {
    let cards = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];

    return cards[Math.floor(Math.random() * cards.length)];
  }

  // Mover las siguientes líneas dentro de window.onload para asegurarse de que se ejecuten después de que se cargue la ventana
  const cardType = `${randomCard()}`;
  const cardNumber = `${randomNumber()}`;

  const typeElement = document.querySelector(".card-type");
  typeElement.innerHTML = cardType;

  const type2Element = document.querySelector(".card-type2");
  type2Element.innerHTML = cardType;

  const numberElement = document.querySelector(".card-number");
  numberElement.innerHTML = cardNumber;
};
