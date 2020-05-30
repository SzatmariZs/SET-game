import { Component, Prop, h, FunctionalComponent } from "@stencil/core";
import { Symbols, Shadings, Colors } from "../interfaces";
import { HTMLStencilElement } from "@stencil/core/internal";

interface ShapeProps {
  color: Colors;
  shading: Shadings;
}

const stripeDefs: HTMLStencilElement = (
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
);

const Oval: FunctionalComponent<ShapeProps> = ({ color, shading }) => (
  <svg width="86" height="46">
    {stripeDefs}
    {shading === Shadings.STRIPED ? (
      <rect
        x="3"
        y="3"
        width="80"
        height="40"
        rx="20"
        ry="20"
        fill={color}
        mask="url(#mask-stripe)"
      />
    ) : null}
    <rect
      x="3"
      y="3"
      width="80"
      height="40"
      rx="20"
      ry="20"
      fill={shading === Shadings.SOLID ? color : "transparent"}
      stroke={color}
      stroke-width="3"
    />
  </svg>
);

const Diamond: FunctionalComponent<ShapeProps> = ({ color, shading }) => (
  <svg width="86" height="46">
    {stripeDefs}
    {shading === Shadings.STRIPED ? (
      <polygon
        points="3 23,43 43,83 23,43 3"
        fill={color}
        mask="url(#mask-stripe)"
      />
    ) : null}
    <polygon
      points="3 23,43 43,83 23,43 3"
      fill={shading === Shadings.SOLID ? color : "transparent"}
      stroke={color}
      stroke-width="3"
    />
  </svg>
);

const Squiggle: FunctionalComponent<ShapeProps> = ({ color, shading }) => (
  <svg width="86" height="46">
    {stripeDefs}
    {shading === Shadings.STRIPED ? (
      <path
        d="M 3 23 Q 20 5, 30 12 T 60 12 C 70 12, 83 23, 64 36 Q 55 42, 40 36 T 12 40 C 12 40, 0 40, 3 23"
        fill={color}
        mask="url(#mask-stripe)"
      />
    ) : null}
    <path
      d="M 3 23 Q 20 5, 30 12 T 60 12 C 70 12, 83 23, 64 36 Q 55 42, 40 36 T 12 40 C 12 40, 0 40, 3 23"
      fill={shading === Shadings.SOLID ? color : "transparent"}
      stroke={color}
      stroke-width="3"
    />
  </svg>
);

@Component({
  tag: "card-shape",
})
export class CardShape {
  @Prop() symbol: Symbols;
  @Prop() shading: Shadings;
  @Prop() color: Colors;

  render(): HTMLStencilElement {
    switch (this.symbol) {
      case Symbols.OVAL:
        return <Oval color={this.color} shading={this.shading} />;
      case Symbols.DIAMOND:
        return <Diamond color={this.color} shading={this.shading} />;
      case Symbols.SQUIGGLE:
        return <Squiggle color={this.color} shading={this.shading} />;
      default:
        return null;
    }
  }
}
