import { p as patchBrowser, b as bootstrapLazy } from './index-18793036.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["card-shape",[[0,"card-shape",{"symbol":[1],"shading":[1],"color":[1]}]]],["game-card",[[0,"game-card",{"number":[2],"symbol":[1],"shading":[1],"color":[1],"isSelected":[4,"is-selected"]}]]],["game-board",[[1,"game-board",{"cardsOnBoard":[32],"cardsInDeck":[32],"setsOnBoard":[32],"selectedCards":[32],"showHint":[32],"gameState":[32]}]]],["set-game-app",[[0,"set-game-app",{"rulesRevealed":[32]}]]]], options);
});
