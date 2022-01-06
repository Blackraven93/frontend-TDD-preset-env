import sum from "../src/jest-test/sum.js";

test("테스트 메세지 작성", () => {
  expect(sum(1, 2)).toBe(3);
});
