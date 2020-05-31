import { Component, Prop, h, FunctionalComponent } from "@stencil/core";
import { Symbols, Shadings, Colors, ShapeProps } from "../interfaces";
import { HTMLStencilElement } from "@stencil/core/internal";

const Oval: FunctionalComponent<ShapeProps> = ({ color, shading }) => {
  const isStriped = shading === Shadings.STRIPED;

  return (
    <rect
      x="3"
      y="3"
      width="80"
      height="40"
      rx="20"
      ry="20"
      fill={shading === Shadings.OPEN ? "transparent" : color}
      stroke={isStriped ? "" : color}
      stroke-width={isStriped ? "" : "3"}
      mask={isStriped ? "url(#mask-stripe)" : ""}
    />
  );
};

const Diamond: FunctionalComponent<ShapeProps> = ({ color, shading }) => {
  const isStriped = shading === Shadings.STRIPED;

  return (
    <polygon
      points="3 23,43 43,83 23,43 3"
      fill={shading === Shadings.OPEN ? "transparent" : color}
      stroke={isStriped ? "" : color}
      stroke-width={isStriped ? "" : "3"}
      mask={isStriped ? "url(#mask-stripe)" : ""}
    />
  );
};

const Squiggle: FunctionalComponent<ShapeProps> = ({ color, shading }) => {
  const isStriped = shading === Shadings.STRIPED;

  return (
    <path
      d="M 10 18 Q 20 5, 30 12 T 60 12 C 70 12, 83 23, 64 36 Q 55 44, 40 36 T 12 40 C 12 40, 0 40, 10 18"
      fill={shading === Shadings.OPEN ? "transparent" : color}
      stroke={isStriped ? "" : color}
      stroke-width={isStriped ? "" : "3"}
      mask={isStriped ? "url(#mask-stripe)" : ""}
    />
  );
};

@Component({
  tag: "card-shape",
})
export class CardShape {
  @Prop() symbol: Symbols;
  @Prop() shading: Shadings;
  @Prop() color: Colors;

  render(): HTMLStencilElement {
    return (
      <svg width="86" height="46">
        <defs>
          <pattern
            id="pattern-stripe"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <rect width="2" height="4" fill="white"></rect>
          </pattern>
          <mask id="mask-stripe" maskUnits="userSpaceOnUse">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#pattern-stripe)"
            />
          </mask>
        </defs>
        {this.symbol === Symbols.OVAL ? (
          <g>
            <Oval color={this.color} shading={this.shading} />
            {this.shading === Shadings.STRIPED ? (
              <Oval color={this.color} shading={Shadings.OPEN} />
            ) : null}
          </g>
        ) : this.symbol === Symbols.DIAMOND ? (
          <g>
            <Diamond color={this.color} shading={this.shading} />
            {this.shading === Shadings.STRIPED ? (
              <Diamond color={this.color} shading={Shadings.OPEN} />
            ) : null}
          </g>
        ) : (
          <g>
            <Squiggle color={this.color} shading={this.shading} />
            {this.shading === Shadings.STRIPED ? (
              <Squiggle color={this.color} shading={Shadings.OPEN} />
            ) : null}
          </g>
        )}
      </svg>
    );
  }
}
