import { Component, h } from "@stencil/core";
import { HTMLStencilElement, State } from "@stencil/core/internal";
import { Colors, Shadings, Symbols } from "../interfaces";

@Component({
  tag: "set-game-app",
  styleUrl: "./app.css",
})
export class SetGameApp {
  @State() rulesRevealed = false;

  render(): HTMLStencilElement {
    return (
      <div class="game-container">
        <game-board />
        <div class="rules">
          <h1>SET</h1>
          <p>
            Set is a real-time card game designed by Marsha Falco in 1974 and
            published by Set Enterprises in 1991.
          </p>
          <p>
            The deck consists of <b>81 unique cards</b> that vary in 4 features
            across 3 possibilities for each kind of feature:
          </p>
          <p>
            • number of shapes <b>(1, 2, or 3)</b>,
          </p>
          <p>
            • shape (
            <card-shape
              title="Diamond"
              color={Colors.GREEN}
              shading={Shadings.SOLID}
              symbol={Symbols.DIAMOND}
            />
            ,{" "}
            <card-shape
              title="Squiggle"
              color={Colors.GREEN}
              shading={Shadings.SOLID}
              symbol={Symbols.SQUIGGLE}
            />
            ,{" "}
            <card-shape
              title="Oval"
              color={Colors.GREEN}
              shading={Shadings.SOLID}
              symbol={Symbols.OVAL}
            />
            ),
          </p>
          <p>
            • shading (
            <card-shape
              title="Solid"
              color={Colors.RED}
              shading={Shadings.SOLID}
              symbol={Symbols.OVAL}
            />
            ,{" "}
            <card-shape
              title="Striped"
              color={Colors.RED}
              shading={Shadings.STRIPED}
              symbol={Symbols.OVAL}
            />
            , or{" "}
            <card-shape
              title="Open"
              color={Colors.RED}
              shading={Shadings.OPEN}
              symbol={Symbols.OVAL}
            />
            ),
          </p>
          <p>
            • and color (<span class="red">red</span>,{" "}
            <span class="green">green</span>, or{" "}
            <span class="purple">purple</span>).
          </p>
          <p>
            Each possible combination of features (e.g. a card with [three]
            [striped] [green] [diamonds]) appears as a card precisely once in
            the deck.
          </p>
          <p>
            In the game, certain combinations of three cards are said to make up
            a set. For each one of the four categories of features — color,
            number, shape, and shading — the three cards must display that
            feature as a) either all the same, or b) all different. Put another
            way: For each feature the three cards must avoid having two cards
            showing one version of the feature and the remaining card showing a
            different version.
          </p>
          <p class="source-info">
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Set_(card_game)">
              Wikipedia
            </a>
          </p>
        </div>
      </div>
    );
  }
}
