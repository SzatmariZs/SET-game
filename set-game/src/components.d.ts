/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Colors, Shadings, Symbols, } from "./components/interfaces";
export namespace Components {
    interface CardShape {
        "color": Colors;
        "shading": Shadings;
        "symbol": Symbols;
    }
    interface GameBoard {
    }
    interface GameCard {
        "color": Colors;
        "number": number;
        "shading": Shadings;
        "symbol": Symbols;
    }
}
declare global {
    interface HTMLCardShapeElement extends Components.CardShape, HTMLStencilElement {
    }
    var HTMLCardShapeElement: {
        prototype: HTMLCardShapeElement;
        new (): HTMLCardShapeElement;
    };
    interface HTMLGameBoardElement extends Components.GameBoard, HTMLStencilElement {
    }
    var HTMLGameBoardElement: {
        prototype: HTMLGameBoardElement;
        new (): HTMLGameBoardElement;
    };
    interface HTMLGameCardElement extends Components.GameCard, HTMLStencilElement {
    }
    var HTMLGameCardElement: {
        prototype: HTMLGameCardElement;
        new (): HTMLGameCardElement;
    };
    interface HTMLElementTagNameMap {
        "card-shape": HTMLCardShapeElement;
        "game-board": HTMLGameBoardElement;
        "game-card": HTMLGameCardElement;
    }
}
declare namespace LocalJSX {
    interface CardShape {
        "color"?: Colors;
        "shading"?: Shadings;
        "symbol"?: Symbols;
    }
    interface GameBoard {
    }
    interface GameCard {
        "color"?: Colors;
        "number"?: number;
        "shading"?: Shadings;
        "symbol"?: Symbols;
    }
    interface IntrinsicElements {
        "card-shape": CardShape;
        "game-board": GameBoard;
        "game-card": GameCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "card-shape": LocalJSX.CardShape & JSXBase.HTMLAttributes<HTMLCardShapeElement>;
            "game-board": LocalJSX.GameBoard & JSXBase.HTMLAttributes<HTMLGameBoardElement>;
            "game-card": LocalJSX.GameCard & JSXBase.HTMLAttributes<HTMLGameCardElement>;
        }
    }
}
