import { Component, Prop, h } from "@stencil/core";
import { Symbols, Shadings, Colors } from "../interfaces";
import { HTMLStencilElement } from "@stencil/core/internal";

@Component({
  tag: "card-shape",
})
export class CardShape {
  @Prop() symbol: Symbols;
  @Prop() shading: Shadings;
  @Prop() color: Colors;

  render(): HTMLStencilElement {
    const shadingBackgroundMap: Record<Shadings, string> = {
      [Shadings.OPEN]: "transparent",
      [Shadings.SOLID]: this.color,
      [Shadings.STRIPED]: `repeating-linear-gradient(
        90deg,
        transparent,
        transparent 4px,
        ${this.color} 4px,
        ${this.color} 7px
      )`,
    };

    switch (this.symbol) {
      case Symbols.OVAL:
        return (
          <div
            style={{
              height: "2.8rem",
              borderRadius: "25px",
              border: `3px solid ${this.color}`,
              background: shadingBackgroundMap[this.shading],
            }}
          />
        );
      case Symbols.DIAMOND:
        return (
          <div
            style={{
              width: "0",
              height: "0",
              border: "3rem solid transparent",
              borderBottom: `1.4rem solid ${this.color}`,
              position: "relative",
              top: "-3rem",
            }}
          >
            <span
              style={{
                width: "0",
                height: "0",
                border: "3rem solid transparent",
                borderTop: `1.4rem solid ${this.color}`,
                position: "absolute",
                top: "1.4rem",
                left: "-3rem",
              }}
            />
          </div>
        );
      default:
        return null;
    }
  }
}
