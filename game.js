class Card {
  constructor(suit, faceValue, i) {
    this.suit = suit;
    this.value = i;
    this.faceValue = faceValue;
  }
}

class Deck {
  //deck class

  constructor() {
    this.cards = [];
  }

  createCard(suits, faceValues) {
    //a deck within the deck class

    //suit is
    for (let suit of suits) {
      // console.log("what is suit????", suit);
      //for loop

      for (let i = 0; i < faceValues.length; i++) {
        this.cards.push(new Card(suit, faceValues[i], i)); //pushing into array
      }
    }
    console.log(" deck of cards", this.cards);
    return this.cards.length;
  }

  deal() {
    console.log("dealing cards....");
    // deal the new cards

    let hand = [];

    while (hand.length < 2) {
      hand.push(this.cards.pop());
    }

    return hand;
  }

  //let's us shuffle the deck of cards
  shuffle() {
    console.log("shuffling my deck of cards...", this.cards);

    let counter = this.cards.length,
      temp,
      i;

    while (counter) {
      //loop the cards

      i = Math.floor(Math.random() * counter--); //decrement

      temp = this.cards[counter];

      this.cards[counter] = this.cards[i];

      this.cards[i] = temp;
    }
    console.log("Shuffled Deck: ", this.cards);
    return this.cards;
  }
}

let suits = ["Hearts", "Spades", "Diamonds", "Clubs"];

let faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

let cards = new Deck(suits, faceValues);

cards.createCard(suits, faceValues);

cards.shuffle();

console.log(cards.deal());
