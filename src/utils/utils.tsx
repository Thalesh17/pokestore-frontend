import { Config } from "../interfaces/models";

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
export const configTypeFire = (): Config => {
    return {
            color: {
                primary: 'type-fire',
                secondary: 'type-fire-secondary'
            },
            name: 'Fogo',
            value:'fire',
            type:'10'
    }
}
export const configTypeWater = (): Config => {
    return {
            color: {
                primary: 'type-water',
                secondary: 'type-water-secondary'
            },
            name: 'Água',
            value:'water',
            type:'11'
    }
}
export const configTypeGround = (): Config => {
    return {
            color: {
                primary: 'type-ground',
                secondary: 'type-ground-secondary'
            },
            name: 'Terra',
            value:'ground',
            type:'5'
    }
}