import { Component, h, State } from "@stencil/core";
import { Symbols, Shadings, Colors, CardProps, CardTrio } from "../interfaces";
import { HTMLStencilElement } from "@stencil/core/internal";

@Component({
  tag: "game-board",
  styleUrl: "./game-board.css",
  shadow: true,
})
export class GameBoard {
  @State() cardsOnBoard: CardProps[] = [];
  @State() cardsInDeck: CardProps[] = [];
  @State() setsOnBoard: CardTrio[] = [];
  @State() selectedCards: CardProps[] = [];
  @State() showHint = false;

  areCardsSet(cards: CardTrio): boolean {
    const numbers = new Set();
    const symbols = new Set();
    const colors = new Set();
    const shadings = new Set();

    cards.forEach((card) => {
      numbers.add(card.number);
      symbols.add(card.symbol);
      colors.add(card.color);
      shadings.add(card.shading);
    });

    return (
      [numbers, symbols, colors, shadings].filter((set) => set.size === 2)
        .length === 0
    );
  }

  getCardFromDeck(): CardProps {
    const deckIndex = Math.floor(Math.random() * this.cardsInDeck.length);
    return this.cardsInDeck.splice(deckIndex, 1)[0];
  }

  putCardFromDeckToBoard(count: number): void {
    for (let i = 0; i < count; i++) {
      this.cardsOnBoard.push(this.getCardFromDeck());
    }
  }

  countSetsOnBoard(): void {
    const cardsOnBoardLength = this.cardsOnBoard.length;
    for (let i = 0; i < cardsOnBoardLength - 2; i++) {
      for (let j = i + 1; j < cardsOnBoardLength - 1; j++) {
        for (let k = j + 1; k < cardsOnBoardLength; k++) {
          const trio: CardTrio = [
            this.cardsOnBoard[i],
            this.cardsOnBoard[j],
            this.cardsOnBoard[k],
          ];
          if (this.areCardsSet(trio)) {
            this.setsOnBoard.push(trio);
          }
        }
      }
    }

    if (!this.setsOnBoard.length) {
      this.putCardFromDeckToBoard(Math.max(3, this.cardsInDeck.length));
    }
  }

  componentWillLoad() {
    [1, 2, 3].forEach((number) =>
      [Colors.GREEN, Colors.PURPLE, Colors.RED].forEach((color) =>
        [Shadings.OPEN, Shadings.SOLID, Shadings.STRIPED].forEach((shading) =>
          [Symbols.DIAMOND, Symbols.OVAL, Symbols.SQUIGGLE].forEach(
            (symbol) => {
              this.cardsInDeck.push({ number, color, shading, symbol });
            }
          )
        )
      )
    );

    this.putCardFromDeckToBoard(12);
    this.countSetsOnBoard();
  }

  selectCard(clickedCard: CardProps): void {
    if (this.selectedCards.includes(clickedCard)) {
      this.selectedCards = this.selectedCards.filter(
        (card) => card !== clickedCard
      );
    } else {
      this.selectedCards = [...this.selectedCards, clickedCard];
    }

    if (this.selectedCards.length === 3) {
      if (this.areCardsSet(this.selectedCards as CardTrio)) {
        this.cardsOnBoard = this.cardsOnBoard.map((cardOnBoard) =>
          this.selectedCards.includes(cardOnBoard)
            ? this.getCardFromDeck()
            : cardOnBoard
        );
        this.setsOnBoard = [];
        this.countSetsOnBoard();
        // TODO: Add animation
      }

      this.selectedCards = [];
    }
  }

  toggleHint = () => {
    this.showHint = !this.showHint;
  };

  render(): HTMLStencilElement {
    return (
      <div class="board-container">
        <div class="board">
          {this.cardsOnBoard.map((card) => (
            <game-card
              number={card.number}
              symbol={card.symbol}
              shading={card.shading}
              color={card.color}
              isSelected={this.selectedCards.includes(card)}
              onClick={() => this.selectCard(card)}
            />
          ))}
        </div>
        <div class="game-info">
          <p>Number of SETs on board: {this.setsOnBoard.length}</p>
          <p>Cards left in deck: {this.cardsInDeck.length}</p>
          <button onClick={this.toggleHint}>
            {this.showHint ? "Hide hint" : "Show hint"}
          </button>
          <p class={this.showHint ? "" : "hidden"}>
            {this.setsOnBoard?.map((set) => (
              <div>
                {set
                  .map((setObject) => Object.values(setObject).join(", "))
                  .join("; ")}
              </div>
            ))}
          </p>
        </div>
      </div>
    );
  }
}
