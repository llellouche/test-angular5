export function randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function randomDateInCurrentYear(): Date {
    return randomDate(new Date((new Date()).getFullYear(), 0, 1), new Date());
}
