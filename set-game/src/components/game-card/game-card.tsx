import { Component, Prop, h } from "@stencil/core";
import { Symbols, Shadings, Colors, CardProps } from "../interfaces";

@Component({
  tag: "game-card",
  styleUrl: "./game-card.css",
})
export class GameCard {
  @Prop() number: number;
  @Prop() symbol: Symbols;
  @Prop() shading: Shadings;
  @Prop() color: Colors;
  @Prop() isSelected = false;

  render() {
    const shapeArray: CardProps[] = Array(this.number).fill({
      color: this.color,
      symbol: this.symbol,
      shading: this.shading,
    });
    return (
      <div
        class={`card ${this.isSelected ? "selected" : ""}`}
        title={`${this.number}, ${this.color}, ${this.shading}, ${this.symbol}`}
      >
        {shapeArray.map((shape) => (
          <card-shape
            class="shape"
            symbol={shape.symbol}
            shading={shape.shading}
            color={shape.color}
          />
        ))}
      </div>
    );
  }
}
