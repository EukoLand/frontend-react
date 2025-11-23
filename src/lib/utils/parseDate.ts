export function parseDate(value: string) {
    return new Date(
        Date.parse(
            value
        ),
    );
}

export function parseDateOrNull(value: string | null) {
    return value === null ? null : new Date(
        Date.parse(
            value
        ),
    );
}