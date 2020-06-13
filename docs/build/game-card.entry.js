import { r as registerInstance, h } from './index-18793036.js';

const gameCardCss = ".card{background-color:white;box-shadow:4px 4px 8px rgba(0, 0, 0, 0.2);height:12rem;width:7rem;border-radius:16px;display:flex;justify-content:space-evenly;flex-flow:column wrap;align-items:center;padding:4px;transition:all 0.25s}.selected{transform:scale(1.1);box-shadow:10px 10px rgba(0, 0, 0, 0.2)}";

const GameCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isSelected = false;
    }
    render() {
        const shapeArray = Array(this.number).fill({
            color: this.color,
            symbol: this.symbol,
            shading: this.shading,
        });
        return (h("div", { class: `card ${this.isSelected ? "selected" : ""}`, title: `${this.number}, ${this.color}, ${this.shading}, ${this.symbol}` }, shapeArray.map((shape) => (h("card-shape", { class: "shape", symbol: shape.symbol, shading: shape.shading, color: shape.color })))));
    }
};
GameCard.style = gameCardCss;

export { GameCard as game_card };
