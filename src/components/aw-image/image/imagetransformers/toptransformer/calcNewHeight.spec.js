import { calcNewHeight } from "./calcNewHeight";
describe("Transformer > TopTransformer > Calculate new height", () => {
  test("Transform up", () => {
    const eventState = { startY: 100 };
    const imageState = { h: 100 };
    const mouseEvent = { clientY: 100 };
    for (let i = mouseEvent.clientY; i >= 0; i--) {
      const result = calcNewHeight({ clientY: i, eventState, imageState });
      expect(result).toBe(100 + (100 - i));
    }
  });

  test("Transform down", () => {
    const eventState = { startY: 100 };
    const imageState = { h: 100 };
    const mouseEvent = { clientY: 100 };
    for (let i = mouseEvent.clientY; i < 210; i++) {
      const result = calcNewHeight({ clientY: i, eventState, imageState });
      if (i <= 200) {
        expect(result).toBe(100 - (i - 100));
      } else {
        expect(result).toBe(0);
      }
    }
  });
});
