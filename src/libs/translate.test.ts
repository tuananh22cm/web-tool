import { ITranslationMap, translate } from "./translate";

describe("Testing translate:", () => {
    const dictionary: ITranslationMap = {
        pageTitle: {
            deDE: "Titel der Seite",
            enUS: "Page Title",
            viVN: "Tên của trang",
        },
        noDE: {
            enUS: "German is missing",
            viVN: "Thiếu tiếng đức",
        },
        noRegion: {
            de: "Deutsch",
        },
    };

    test("should return {{doesn't matter}} for dictionary = {}.", () => {
        const translation = translate({}, "doesn't matter", "de-DE");
        expect(translation).toBe("{{doesn't matter}}");
    });

    test("shoud return {{exact}} for invalid langCode.", () => {
        const translation = translate(dictionary, "exact", "invalid..)!&§)=%Code");
        expect(translation).toBe("{{exact}}");
    });

    test("should use 'en-US' (default fallback langCode) if translation for 'de-DE' is not available.", () => {
        const translation = translate(dictionary, "noDE", "de-DE");
        expect(translation).toBe(dictionary.noDE.enUS);
    });

    test("should use `de-DE` (fallback langCode) if translation for `zh-ZH` is not available.", () => {
        const translation = translate(dictionary, "pageTitle", "zh-ZH", "de-DE");
        expect(translation).toBe(dictionary.pageTitle.deDE);
    });

    test("should return actual translation for correct langCode and langMap (e.g. 'Gewünschte Key' for langMap 'de-DE').", () => {
        const translation = translate(dictionary, "pageTitle", "de-DE");
        expect(translation).toBe(dictionary.pageTitle.deDE);
    });

    test("should transform langCode 'deDE' to 'de-DE' and return translation.", () => {
        const translation = translate(dictionary, "pageTitle", "deDE");
        expect(translation).toBe(dictionary.pageTitle.deDE);
    });

    test("should use `de` for langcode `de-DE` if translation for `de-DE.`", () => {
        const translation = translate(dictionary, "noRegion", "de-DE");
        expect(translation).toBe(dictionary.noRegion.de);
    });

    test("should use `de-DE` for langcode `de-de`.", () => {
        const translation = translate(dictionary, "pageTitle", "de-de");
        expect(translation).toBe(dictionary.pageTitle.deDE);
    });

    test("should use `de-DE` for langcode `de` if translation for `de` is not available.", () => {
        const translation = translate(dictionary, "pageTitle", "de");
        expect(translation).toBe(dictionary.pageTitle.deDE);
    });
});
