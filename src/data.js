import miniRed from './img/red_mini.png';
import miniBlue from './img/blue_mini.png';
import miniGreen from './img/green_mini.png';

import bigRed1 from './img/red_big1.png';
import bigRed2 from './img/red_big2.png';
import bigRed3 from './img/red_big3.png';

import bigBlue1 from './img/blue_big1.png';
import bigBlue2 from './img/blue_big2.png';
import bigBlue3 from './img/blue_big3.png';

import bigGreen1 from './img/green_big1.png';
import bigGreen2 from './img/green_big2.png';
import bigGreen3 from './img/green_big3.png';

export const data = [
    {
        name: "polycarbonate",
        colors: [
            { color: "red", miniImages: miniRed, photos: [bigRed1, bigRed2, bigRed3] },
            { color: "green", miniImages: miniGreen, photos: [bigGreen1, bigGreen2, bigGreen3] },
            { color: "blue", miniImages: miniBlue, photos: [bigBlue1, bigBlue2, bigBlue3] },
        ],
        price: 50,
        onSale: false,
        priceSale: 30,
    },
    {
        name: "polycarbonate polarized",
        colors: [
            { color: "red", miniImages: miniRed, photos: [bigRed1, bigRed2, bigRed3] },
            { color: "green", miniImages: miniGreen, photos: [bigGreen1, bigGreen2, bigGreen3] },
            { color: "blue", miniImages: miniBlue, photos: [bigBlue1, bigBlue2, bigBlue3] },
        ],
        price: 70,
        onSale: true,
        priceSale: 45,
    },
    {
        name: "trivex® perfomance",
        colors: [
            { color: "red", miniImages: miniRed, photos: [bigRed1, bigRed2, bigRed3] },
            { color: "green", miniImages: miniGreen, photos: [bigGreen1, bigGreen2, bigGreen3] },
            { color: "blue", miniImages: miniBlue, photos: [bigBlue1, bigBlue2, bigBlue3] },
        ],
        price: 100,
        onSale: true,
        priceSale: 64,
    },
];