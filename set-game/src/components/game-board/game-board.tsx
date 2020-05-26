import { Component, h } from "@stencil/core";
import { Symbols, Shadings, Colors } from "../interfaces";

@Component({
  tag: "game-board",
  styleUrl: "./game-board.css",
  shadow: true,
})
export class GameBoard {
  render() {
    return (
      <div class="board">
        {[1, 2, 3].map((number) =>
          [Colors.GREEN, Colors.PURPLE, Colors.RED].map((color) =>
            [Shadings.OPEN, Shadings.SOLID, Shadings.STRIPED].map((shading) =>
              [
                Symbols.DIAMOND,
                Symbols.OVAL,
                Symbols.SQUIGGLE,
              ].map((symbol) => (
                <game-card
                  number={number}
                  symbol={symbol}
                  shading={shading}
                  color={color}
                />
              ))
            )
          )
        )}
      </div>
    );
  }
}
