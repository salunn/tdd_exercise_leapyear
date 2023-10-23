import { strict as assert } from "assert";
import Leapyear from "../src/leapyear.js";

describe("Leap Year should", () => {
  it("return true if year is divisible by four", () => {
    assert.ok(Leapyear(4));
  });

  it("return false if year is not divisible by four", () => {
    assert.ok(!Leapyear(5));
  });

  it("return false if year is divisible by four and 100 but not 400", () => {
    assert.ok(!Leapyear(200));
  });

  it("return true if year is divisible by 4 and 400", () => {
    assert.ok(Leapyear(400));
  });

  it("return false for 2001", () => {
    assert.ok(!Leapyear(2001));
  });

  it("return true for 1996", () => {
    assert.ok(Leapyear(1996));
  });

  it("return false for 1900", () => {
    assert.ok(!Leapyear(1900));
  });

  it("return true for 2000", () => {
    assert.ok(Leapyear(2000));
  });

  it("return true for 96", () => {
    assert.ok(Leapyear(96));
  });
});
