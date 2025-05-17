// number formatting function
export function formatNumber(number) {
    return number.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}
