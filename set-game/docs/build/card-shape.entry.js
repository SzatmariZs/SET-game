import { h, r as registerInstance } from './index-18793036.js';
import { S as Shadings, a as Symbols } from './interfaces-d51662a6.js';

const Oval = ({ color, shading }) => {
    const isStriped = shading === Shadings.STRIPED;
    return (h("rect", { x: "3", y: "3", width: "80", height: "40", rx: "20", ry: "20", fill: shading === Shadings.OPEN ? "transparent" : color, stroke: isStriped ? "" : color, "stroke-width": isStriped ? "" : "3", mask: isStriped ? "url(#mask-stripe)" : "" }));
};
const Diamond = ({ color, shading }) => {
    const isStriped = shading === Shadings.STRIPED;
    return (h("polygon", { points: "3 23,43 43,83 23,43 3", fill: shading === Shadings.OPEN ? "transparent" : color, stroke: isStriped ? "" : color, "stroke-width": isStriped ? "" : "3", mask: isStriped ? "url(#mask-stripe)" : "" }));
};
const Squiggle = ({ color, shading }) => {
    const isStriped = shading === Shadings.STRIPED;
    return (h("path", { d: "M 10 18 Q 20 5, 30 12 T 60 12 C 70 12, 83 23, 64 36 Q 55 44, 40 36 T 12 40 C 12 40, 0 40, 10 18", fill: shading === Shadings.OPEN ? "transparent" : color, stroke: isStriped ? "" : color, "stroke-width": isStriped ? "" : "3", mask: isStriped ? "url(#mask-stripe)" : "" }));
};
const CardShape = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("svg", { width: "86", height: "46" }, h("defs", null, h("pattern", { id: "pattern-stripe", width: "4", height: "4", patternUnits: "userSpaceOnUse" }, h("rect", { width: "2", height: "4", fill: "white" })), h("mask", { id: "mask-stripe", maskUnits: "userSpaceOnUse" }, h("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "url(#pattern-stripe)" }))), this.symbol === Symbols.OVAL ? (h("g", null, h(Oval, { color: this.color, shading: this.shading }), this.shading === Shadings.STRIPED ? (h(Oval, { color: this.color, shading: Shadings.OPEN })) : null)) : this.symbol === Symbols.DIAMOND ? (h("g", null, h(Diamond, { color: this.color, shading: this.shading }), this.shading === Shadings.STRIPED ? (h(Diamond, { color: this.color, shading: Shadings.OPEN })) : null)) : (h("g", null, h(Squiggle, { color: this.color, shading: this.shading }), this.shading === Shadings.STRIPED ? (h(Squiggle, { color: this.color, shading: Shadings.OPEN })) : null))));
    }
};

export { CardShape as card_shape };
