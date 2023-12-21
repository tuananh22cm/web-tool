/**
 * Check if a string has some a value (not null, not undefined and not whitespacce-only)
 * @param target string to be checked
 * @returns false null, undefined and white-space only strings
 * @returns true in any other cases
 */
export const isEmpty = (target: string | undefined): boolean => (target ?? "").trim() === "";

/**
 * Check if an object has any other values than null / undefined.
 * @returns false null or undefined
 * @returns true in any other cases.
 */
export const isSet = (target: unknown): boolean => target !== null && target !== undefined;

/**
 * Check if Array has any elements
 * @param target Array to be checked
 * @returns false null, undefined and []
 * @returns true in any other cases
 */
export function hasElements<TElement>(target: Array<TElement>): boolean {
    return (target ?? []).length > 0;
}

export const formatDate = (date: Date | string | number | undefined): string | undefined => {
    if (date === undefined) {
        return undefined;
    }
    const dates = new Date(date);
    const day = dates.getDate();
    const month = dates.getMonth() + 1;
    const year = dates.getFullYear();
    return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
};

export const formatDateAndTime = (date: number | undefined): string | undefined => {
    if (date === undefined) {
        return undefined;
    }
    const dates = new Date(date);
    const day = dates.getDate();
    const month = dates.getMonth() + 1;
    const year = dates.getFullYear();

    const hours = dates.getHours();
    const minutes = dates.getMinutes();
    return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}T${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export const shortString = (s: string | undefined): string => {
    if (!s) return "";
    if (s.length < 75) return s;

    return `${s.slice(0, 75)}...`;
};

export const validatePassword = (pw?: string): boolean => 
    pw !== undefined && pw !== null && pw !== "" && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[.@$#!%*?&\d])[A-Za-z\d.@$#!%*?&]{8,}$/.test(pw);

export const formatDateDMY = (date: Date | string | number): string => {
    const dates = new Date(date);
    const day = dates.getDate();
    const month = dates.getMonth() + 1;
    const year = dates.getFullYear();
    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
};

/**
 * Truncate a string and append a suffix (default: `...`) if it exceed a certain limit.
 * @param q
 * @param config
 */
export const truncateString = (q: string, config?: Partial<{ limit: number; suffix: string }>): string => {
    const limit = config?.limit ?? 15;
    return q.length > limit ? `${q.substr(0, limit)}${config?.suffix ?? "..."}` : q;
};
