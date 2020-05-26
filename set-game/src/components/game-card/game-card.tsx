import { Component, Prop, h } from "@stencil/core";
import { Symbols, Shadings, Colors } from "../interfaces";

@Component({
  tag: "game-card",
  styleUrl: "./game-card.css",
})
export class GameCard {
  @Prop() number: number;
  @Prop() symbol: Symbols;
  @Prop() shading: Shadings;
  @Prop() color: Colors;

  render() {
    return (
      <div class="card">
        {Array(this.number).fill(
          <card-shape
            class="shape"
            symbol={this.symbol}
            shading={this.shading}
            color={this.color}
          />
        )}
      </div>
    );
  }
}
