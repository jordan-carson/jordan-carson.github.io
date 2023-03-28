export function humanDate(date) {
    return toDate(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });
}
export function humanDateTime(date) {
    return toDate(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
}
export function UTCDate(date) {
    return toDate(date).toUTCString();
}
export function ISODate(date) {
    return toDate(date).toISOString().split("T")[0];
}
function toDate(date) {
    if (!date)
        return new Date();
    return typeof date === "string" ? new Date(date) : date;
}
//# sourceMappingURL=formatters.js.map