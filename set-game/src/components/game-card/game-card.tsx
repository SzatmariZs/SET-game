import { Component, Prop, h } from "@stencil/core";
import { Symbols, Shadings, Colors, ShapeProps } from "../interfaces";

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
    const shapeArray: ShapeProps[] = Array(this.number).fill({
      color: this.color,
      symbol: this.symbol,
      shading: this.shading,
    });
    return (
      <div class="card">
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
