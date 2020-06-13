var Symbols;
(function (Symbols) {
    Symbols["DIAMOND"] = "diamond";
    Symbols["SQUIGGLE"] = "squiggle";
    Symbols["OVAL"] = "oval";
})(Symbols || (Symbols = {}));
var Colors;
(function (Colors) {
    Colors["GREEN"] = "green";
    Colors["PURPLE"] = "purple";
    Colors["RED"] = "red";
})(Colors || (Colors = {}));
var Shadings;
(function (Shadings) {
    Shadings["SOLID"] = "solid";
    Shadings["STRIPED"] = "striped";
    Shadings["OPEN"] = "open";
})(Shadings || (Shadings = {}));
var GameStates;
(function (GameStates) {
    GameStates["NEUTRAL"] = "neutral";
    GameStates["IS_SET"] = "is-set";
    GameStates["NOT_SET"] = "not-set";
    GameStates["WON"] = "won";
})(GameStates || (GameStates = {}));

export { Colors as C, GameStates as G, Shadings as S, Symbols as a };
