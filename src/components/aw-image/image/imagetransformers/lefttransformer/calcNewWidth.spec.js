import { calcNewWidth } from "./calcNewWidth";
describe("Transformer > Left Transformer > Calculate new width", () => {
  test("To the left", () => {
    const eventState = { startX: 100, origW: 100 };
    const MINWIDTH = 25;
    const mouseEvent = { clientX: 100 };
    for (let i = mouseEvent.clientX; i >= 0; i--) {
      const newW = calcNewWidth({ eventState, clientX: i, MINWIDTH });
      expect(newW).toBe(100 + (100 - i));
    }
  });
});
