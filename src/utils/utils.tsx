export const randomNumber = (): string => {
    return (Math.random() * (100 - 50) + 50).toFixed(2);
}
export const capitalize = (s: string): string => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}
export const numberFormatBRL = (value: number): string=> {
    let formatter = new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      })
    return formatter.format(value);
}