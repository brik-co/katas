export const add = (numbers: string) => numbers.split(',').reduce((a, b) => Number(a) + Number(b), 0);
