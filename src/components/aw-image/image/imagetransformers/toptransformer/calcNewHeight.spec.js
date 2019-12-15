import { calcNewHeight } from "./calcNewHeight";
describe("Transformer > TopTransformer > Calculate new height", () => {
  test("Transform up", () => {
    const MINHEIGHT = 25;
    const eventState = { startY: 100, origH: 100 };
    const mouseEvent = { clientY: 100 };
    for (let i = mouseEvent.clientY; i >= 0; i--) {
      const result = calcNewHeight({ clientY: i, eventState, MINHEIGHT });
      expect(result).toBe(100 + (100 - i));
    }
  });

  test("Transform down", () => {
    const MINHEIGHT = 25;

    const eventState = { startY: 100, origH: 100 };
    const mouseEvent = { clientY: 100 };
    for (let i = mouseEvent.clientY; i < 210; i++) {
      const result = calcNewHeight({ clientY: i, eventState, MINHEIGHT });
      if (i <= 175) {
        expect(result).toBe(100 - (i - 100));
      } else {
        expect(result).toBe(MINHEIGHT);
      }
    }
  });
});
