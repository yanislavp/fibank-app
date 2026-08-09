import { describe, expect, it } from "vitest";
import {
  isLoginFormValid,
  validateCredentialField,
  validateLoginForm,
} from "./validators";

describe("validateCredentialField", () => {
  it("rejects empty values", () => {
    expect(validateCredentialField("")).toMatch(/required/i);
    expect(validateCredentialField("   ")).toMatch(/required/i);
  });

  it("rejects values shorter than 4 characters", () => {
    expect(validateCredentialField("abc")).toMatch(/at least/i);
  });

  it("rejects values longer than 30 characters", () => {
    expect(validateCredentialField("a".repeat(31))).toMatch(/at most/i);
  });

  it("accepts values within the 4-30 character range", () => {
    expect(validateCredentialField("abcd")).toBeNull();
    expect(validateCredentialField("a".repeat(30))).toBeNull();
  });
});

describe("validateLoginForm / isLoginFormValid", () => {
  it("is valid when both fields pass validation", () => {
    const errors = validateLoginForm({ username: "neo", password: "matrix" });
    expect(isLoginFormValid(errors)).toBe(false);
  });

  it("is valid when both fields meet the length requirement", () => {
    const errors = validateLoginForm({
      username: "trinity",
      password: "redpill1",
    });
    expect(isLoginFormValid(errors)).toBe(true);
  });
});
