import { describe, expect, it } from "vitest";

import { Foo } from '../src'

describe("Foo", () => {
  it("Bar", () => {
    expect(Foo.Bar).toStrictEqual({})
  });
});
