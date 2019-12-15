import { calcNewY } from "./calcNewY";

describe("Transformer > TopTransformer > Calculate New Y", () => {
  test("Transform up", () => {
    const eventState = { startY: 100, origY: 100, origH: 100 };
    const mouseEvent = { clientY: 100 };
    for (let i = mouseEvent.clientY; i >= 0; i--) {
      const newY = calcNewY({ eventState, clientY: i });
      expect(newY).toBe(i);
    }
  });

  test("Transform down", () => {
    const eventState = { startY: 100, origY: 100, origH: 100 };
    const mouseEvent = { clientY: 100 };
    for (let i = mouseEvent.clientY; i < 210; i++) {
      const newY = calcNewY({ eventState, clientY: i });
      if (i <= 200) {
        expect(newY).toBe(i);
      } else {
        expect(newY).toBe(200);
      }
    }
  });
});
