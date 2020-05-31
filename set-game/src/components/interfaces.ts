export enum Symbols {
  DIAMOND = "diamond",
  SQUIGGLE = "squiggle",
  OVAL = "oval",
}

export enum Colors {
  GREEN = "green",
  PURPLE = "purple",
  RED = "red",
}

export enum Shadings {
  SOLID = "solid",
  STRIPED = "striped",
  OPEN = "open",
}

export interface ShapeProps {
  shading: Shadings;
  color: Colors;
}

export interface CardProps extends ShapeProps {
  symbol?: Symbols;
  number?: number;
}
