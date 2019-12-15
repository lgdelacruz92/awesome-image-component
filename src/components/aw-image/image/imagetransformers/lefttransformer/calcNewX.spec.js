import { calcNewX } from "./calcNewX";
describe("Transformer > Left Transformer > Calculate New X", () => {
  test("To the left", () => {
    const eventState = { startX: 100, origX: 100, origW: 100 };
    const mouseEvent = { clientX: 100 };
    const MINWIDTH = 25;
    for (let i = mouseEvent.clientX; i > 0; i--) {
      const newX = calcNewX({ eventState, clientX: i, MINWIDTH });
      expect(newX).toBe(100 + (100 - i));
    }
  });

  test("To the right", () => {
    const eventState = { startX: 100, origX: 100, origW: 100 };
    const mouseEvent = { clientX: 100 };
    const MINWIDTH = 25;
    for (let i = mouseEvent.clientX; i < 210; i++) {
      const newX = calcNewX({ eventState, clientX: i, MINWIDTH });
      if (i <= 200 - MINWIDTH) {
        expect(newX).toBe(100 - (i - 100));
      } else {
        expect(MINWIDTH);
      }
    }
  });
});
