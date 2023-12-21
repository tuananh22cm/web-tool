import { hasElements, isEmpty, isSet, shortString } from "./utils";

describe("Testing isEmpty", () => {
    it("should return true for null", () => {
        expect(isEmpty(null as any)).toBe(true);
    });

    it("should return true for undefined", () => {
        expect(isEmpty(undefined as any)).toBe(true);
    });

    it('should return true for ""', () => {
        expect(isEmpty("")).toBe(true);
    });

    it("should return true for whitespaces", () => {
        expect(isEmpty("        ")).toBe(true);
    });

    it("should return false for not empty strings", () => {
        expect(isEmpty("not-empty")).toBe(false);
    });
});

describe("Testing hasElements", () => {
    it("should return false for null", () => {
        expect(hasElements(null as any)).toBe(false);
    });

    it("should return false for undefined", () => {
        expect(hasElements(undefined as any)).toBe(false);
    });

    it('should return true for [""]', () => {
        expect(hasElements([""])).toBe(true);
    });

    it("should return true for non-empty Arrays", () => {
        expect(hasElements(["not-empty"])).toBe(true);
    });
});

describe("Testing isSet", () => {
    it("should return false for null", () => {
        expect(isSet(null)).toBe(false);
    });

    it("should return false for undefined", () => {
        expect(isSet(undefined)).toBe(false);
    });

    it("should return true for {}", () => {
        expect(isSet({})).toBe(true);
    });
});

describe("Testing shortString: ", () => {
    it("should return current string and not change", () => {
        expect(shortString("I love you, baby but you don't love me.")).toBe("I love you, baby but you don't love me.");
    });

    it("should return `` when parameter == undefined", () => {
        expect(shortString(undefined)).toBe("");
    });

    it("should return string with 80 characters and 3 dot ", () => {
        const s = "I love you, baby but you don't love me.";

        expect(shortString(s.repeat(20))).toBe("I love you, baby but you don't love me.I love you, baby but you don't love ...");
    });

});

