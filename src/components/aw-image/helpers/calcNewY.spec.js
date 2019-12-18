import { calcNewY } from "./calcNewY";

describe("Transformer > TopTransformer > Calculate New Y", () => {
  test("Transform up", () => {
    const MINHEIGHT = 25;
    const eventState = { startY: 100, origY: 100, origH: 100 };
    const mouseEvent = { clientY: 100 };
    for (let i = mouseEvent.clientY; i >= 0; i--) {
      const newY = calcNewY({ eventState, clientY: i, MINHEIGHT });
      expect(newY).toBe(i);
    }
  });

  test("Transform down", () => {
    const MINHEIGHT = 25;
    const eventState = { startY: 100, origY: 100, origH: 100 };
    const mouseEvent = { clientY: 100 };
    for (let i = mouseEvent.clientY; i < 210; i++) {
      const newY = calcNewY({ eventState, clientY: i, MINHEIGHT });
      if (i <= 200 - MINHEIGHT) {
        expect(newY).toBe(i);
      } else {
        expect(newY).toBe(200 - MINHEIGHT);
      }
    }
  });
});
