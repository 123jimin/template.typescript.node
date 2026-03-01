import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {PLACEHOLDER} from "./index.ts";

describe("PLACEHOLDER", () => {
    it("should be equal to 42", () => {
        assert.strictEqual(PLACEHOLDER, 42);
    });
});
