import { r as registerInstance, h } from './index-18793036.js';
import { G as GameStates, C as Colors, S as Shadings, a as Symbols } from './interfaces-d51662a6.js';

const gameBoardCss = ".board{display:grid;grid-template-columns:repeat(4, 7rem);column-gap:2rem;row-gap:2rem;width:32rem;padding:2rem;float:left;margin-right:2rem}button{background-color:white;color:saddlebrown;font-size:14px;font-family:\"Merriweather\", serif;padding:4px 8px;border-radius:4px;border:2px outset saddlebrown;cursor:pointer}.game-info{color:white;font-family:\"Merriweather\", serif;display:block;float:right;margin-top:32px}.hidden{display:none}.card{margin-bottom:16px;padding:8px;position:relative}@keyframes not-set{0%{left:0}25%{left:2rem}50%{left:-1.5rem}100%{left:0}}.not-set .card.selected{animation:not-set 0.8s}@keyframes is-set{0%{opacity:1;bottom:0}100%{opacity:0;bottom:4rem}}.is-set .card.selected{animation:is-set 0.8s ease-in}.board-container{position:relative}.winning-message{display:none}.won .winning-message{display:block;position:absolute;height:100%;width:100%;background-color:rgba(0, 0, 0, 0.7);color:white;font-size:36px;z-index:10}";

const GameBoard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cardsOnBoard = [];
        this.cardsInDeck = [];
        this.setsOnBoard = [];
        this.selectedCards = [];
        this.showHint = false;
        this.gameState = GameStates.NEUTRAL;
        this.toggleHint = () => {
            this.showHint = !this.showHint;
        };
        this.resetGame = () => {
            this.cardsInDeck = [];
            this.cardsOnBoard = [];
            this.setsOnBoard = [];
            this.gameState = GameStates.NEUTRAL;
            this.createDeck();
            this.putCardFromDeckToBoard(12);
            this.countSetsOnBoard();
        };
    }
    areCardsSet(cards) {
        const numbers = new Set();
        const symbols = new Set();
        const colors = new Set();
        const shadings = new Set();
        cards.forEach((card) => {
            numbers.add(card.number);
            symbols.add(card.symbol);
            colors.add(card.color);
            shadings.add(card.shading);
        });
        return ([numbers, symbols, colors, shadings].filter((set) => set.size === 2)
            .length === 0);
    }
    getCardFromDeck() {
        const deckIndex = Math.floor(Math.random() * this.cardsInDeck.length);
        return this.cardsInDeck.splice(deckIndex, 1)[0];
    }
    putCardFromDeckToBoard(count) {
        for (let i = 0; i < count; i++) {
            this.cardsOnBoard.push(this.getCardFromDeck());
        }
    }
    countSetsOnBoard() {
        const cardsOnBoardLength = this.cardsOnBoard.length;
        for (let i = 0; i < cardsOnBoardLength - 2; i++) {
            for (let j = i + 1; j < cardsOnBoardLength - 1; j++) {
                for (let k = j + 1; k < cardsOnBoardLength; k++) {
                    const trio = [
                        this.cardsOnBoard[i],
                        this.cardsOnBoard[j],
                        this.cardsOnBoard[k],
                    ];
                    if (this.areCardsSet(trio)) {
                        this.setsOnBoard.push(trio);
                    }
                }
            }
        }
        if (!this.setsOnBoard.length) {
            this.putCardFromDeckToBoard(Math.min(3, this.cardsInDeck.length));
            this.countSetsOnBoard();
        }
    }
    createDeck() {
        [1, 2, 3].forEach((number) => [Colors.GREEN, Colors.PURPLE, Colors.RED].forEach((color) => [Shadings.OPEN, Shadings.SOLID, Shadings.STRIPED].forEach((shading) => [Symbols.DIAMOND, Symbols.OVAL, Symbols.SQUIGGLE].forEach((symbol) => {
            this.cardsInDeck.push({ number, color, shading, symbol });
        }))));
    }
    componentWillLoad() {
        this.createDeck();
        this.putCardFromDeckToBoard(12);
        this.countSetsOnBoard();
    }
    selectCard(clickedCard) {
        if (this.selectedCards.includes(clickedCard)) {
            this.selectedCards = this.selectedCards.filter((card) => card !== clickedCard);
        }
        else {
            this.selectedCards = [...this.selectedCards, clickedCard];
        }
        if (this.selectedCards.length === 3) {
            if (this.areCardsSet(this.selectedCards)) {
                this.gameState = GameStates.IS_SET;
            }
            else {
                this.gameState = GameStates.NOT_SET;
            }
            setTimeout(() => {
                if (this.gameState === GameStates.IS_SET) {
                    const numberOfCardsOnBoard = this.cardsOnBoard.length;
                    console.log(numberOfCardsOnBoard);
                    this.cardsOnBoard =
                        numberOfCardsOnBoard !== 12
                            ? [...this.cardsOnBoard]
                            : this.cardsOnBoard.map((cardOnBoard) => this.selectedCards.includes(cardOnBoard)
                                ? this.getCardFromDeck()
                                : cardOnBoard);
                    this.setsOnBoard = [];
                    this.countSetsOnBoard();
                    if (this.showHint) {
                        this.toggleHint();
                    }
                }
                this.selectedCards = [];
                this.gameState = GameStates.NEUTRAL;
                if (!this.cardsInDeck.length || !this.setsOnBoard.length) {
                    this.gameState = GameStates.WON;
                }
            }, 800);
        }
    }
    render() {
        var _a;
        return (h("div", { class: "board-container" }, h("div", { class: "winning-message" }, h("p", null, "All possible sets cleared, YOU ARE AMAZING!"), h("button", { onClick: this.resetGame }, "Play again")), h("div", { class: `board ${this.gameState}` }, this.cardsOnBoard.map((card) => (h("game-card", { number: card.number, symbol: card.symbol, shading: card.shading, color: card.color, isSelected: this.selectedCards.includes(card), onClick: () => this.selectCard(card) })))), h("div", { class: "game-info" }, h("p", null, "Number of SETs on board: ", this.setsOnBoard.length), h("p", null, "Cards left in deck: ", this.cardsInDeck.length), h("button", { onClick: this.toggleHint }, this.showHint ? "Hide hint" : "Show hint"), " ", h("p", { class: this.showHint ? "" : "hidden" }, (_a = this.setsOnBoard) === null || _a === void 0 ? void 0 : _a.map((set) => (h("div", null, set
            .map((setObject) => Object.values(setObject).join(", "))
            .join("; "))))))));
    }
};
GameBoard.style = gameBoardCss;

export { GameBoard as game_board };
