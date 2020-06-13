import { r as registerInstance, h } from './index-18793036.js';
import { C as Colors, S as Shadings, a as Symbols } from './interfaces-d51662a6.js';

const appCss = ":root{--game-background-color:saddlebrown;--game-foreground-color:white}.game-container{background-color:var(--game-background-color);display:flex;justify-content:space-between}.rules{background-color:var(--game-foreground-color);padding:12px 20px;margin:12px 20px;font-family:'Merriweather', serif;max-width:600px}.red{color:red}.green{color:green}.purple{color:purple}.red,.green,.purple{font-weight:bold}.source-info{font-size:.8em;color:grey;margin-top:24px;text-align:right}";

const SetGameApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rulesRevealed = false;
    }
    render() {
        return (h("div", { class: "game-container" }, h("game-board", null), h("div", { class: "rules" }, h("h1", null, "SET"), h("p", null, "Set is a real-time card game designed by Marsha Falco in 1974 and published by Set Enterprises in 1991."), h("p", null, "The deck consists of ", h("b", null, "81 unique cards"), " that vary in 4 features across 3 possibilities for each kind of feature:"), h("p", null, "\u2022 number of shapes ", h("b", null, "(1, 2, or 3)"), ","), h("p", null, "\u2022 shape (", h("card-shape", { title: "Diamond", color: Colors.GREEN, shading: Shadings.SOLID, symbol: Symbols.DIAMOND }), ",", " ", h("card-shape", { title: "Squiggle", color: Colors.GREEN, shading: Shadings.SOLID, symbol: Symbols.SQUIGGLE }), ",", " ", h("card-shape", { title: "Oval", color: Colors.GREEN, shading: Shadings.SOLID, symbol: Symbols.OVAL }), "),"), h("p", null, "\u2022 shading (", h("card-shape", { title: "Solid", color: Colors.RED, shading: Shadings.SOLID, symbol: Symbols.OVAL }), ",", " ", h("card-shape", { title: "Striped", color: Colors.RED, shading: Shadings.STRIPED, symbol: Symbols.OVAL }), ", or", " ", h("card-shape", { title: "Open", color: Colors.RED, shading: Shadings.OPEN, symbol: Symbols.OVAL }), "),"), h("p", null, "\u2022 and color (", h("span", { class: "red" }, "red"), ",", " ", h("span", { class: "green" }, "green"), ", or", " ", h("span", { class: "purple" }, "purple"), ")."), h("p", null, "Each possible combination of features (e.g. a card with [three] [striped] [green] [diamonds]) appears as a card precisely once in the deck."), h("p", null, "In the game, certain combinations of three cards are said to make up a set. For each one of the four categories of features \u2014 color, number, shape, and shading \u2014 the three cards must display that feature as a) either all the same, or b) all different. Put another way: For each feature the three cards must avoid having two cards showing one version of the feature and the remaining card showing a different version."), h("p", { class: "source-info" }, "Source:", " ", h("a", { target: "_blank", href: "https://en.wikipedia.org/wiki/Set_(card_game)" }, "Wikipedia")))));
    }
};
SetGameApp.style = appCss;

export { SetGameApp as set_game_app };
