import { Component, h, State } from "@stencil/core";
import { Symbols, Shadings, Colors, CardProps } from "../interfaces";
import { HTMLStencilElement } from "@stencil/core/internal";

@Component({
  tag: "game-board",
  styleUrl: "./game-board.css",
  shadow: true,
})
export class GameBoard {
  @State() cardsOnBoard: CardProps[] = [];
  @State() cardsInDeck: CardProps[] = [];

  putCardFromDeckToBoard(): void {
    const deckIndex = Math.floor(Math.random() * this.cardsInDeck.length);

    this.cardsOnBoard.push(this.cardsInDeck.splice(deckIndex, 1)[0]);
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

    for (let i = 0; i < 12; i++) {
      this.putCardFromDeckToBoard();
    }
  }

  render(): HTMLStencilElement {
    return (
      <div class="board">
        {this.cardsOnBoard.map((card) => (
          <game-card
            number={card.number}
            symbol={card.symbol}
            shading={card.shading}
            color={card.color}
          />
        ))}
      </div>
    );
  }
}
