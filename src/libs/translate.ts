export interface ITranslationMap {
    [translationKey: string]: ILangMap;
}

export const nameof = <T>(property: keyof T): keyof T => property;

/**
 * Language definition object.
 * Please use deDE instead of de-DE.
 * @see Information about different language codes: https://en.wikipedia.org/wiki/Language_code
 * @see List of IETF language tag: https://datahub.io/core/language-codes/r/3.html
 */
export interface ILangMap {
    [langCode: string]: string | undefined;

    deDE?: string;
    viVN?: string;
    enUS?: string;
}

/**
 * Return the translation from the language map for the given langCode and key.
 * Use the fallbackLangCode if given langCode or key in the given langCode is not available.
 *
 * @param dict is the language mapping dictionary, that contains the mapping from language code to translations dictionary. Please use "deDE" instead of "de-DE".
 * @param langCode is the desired language code. "deDE" and "de-DE" is treated the same.
 * @param key is the key string for the translation
 * @param fallbackLangCode is the language code to be used when the desired langCode is not available.
 */
export const translate = (dict: ITranslationMap, key: keyof ITranslationMap, langCode = "en-US", fallbackLangCode = "en-US"): string => {
    const innerFn = (lc: string): string | undefined => {
        const splitLC = lc.match(/^([a-z]*)-?([a-zA-Z]*)$/);
        if (splitLC === null) {
            return undefined;
        }

        const transformedLC = `${splitLC[1]}${splitLC[2]?.toUpperCase()}`;

        if (typeof dict?.[key]?.[transformedLC] === "string") {
            return dict?.[key]?.[transformedLC];
        }

        // If translation for the specified langCode is not available, we will try the origin language (no region code).
        const origin = splitLC[1];
        if (typeof dict?.[key]?.[origin] === "string") {
            return dict?.[key]?.[origin];
        }

        // console.warn(`translate could not find the key '${key}'. We will render '{{${key}}}'`);
        return undefined;
    };

    // Priority: use langCode, use region-free langCode, use defaultLangCode, use region-free defaultLangCode
    return dict?.[key]?.[langCode] || innerFn(langCode) || innerFn(`${langCode}-${langCode}`)|| innerFn(fallbackLangCode) || `{{${key}}}`;
};
