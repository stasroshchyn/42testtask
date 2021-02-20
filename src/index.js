import './styles.scss';

import { data } from './data';

const goodsTitle = document.querySelector('.goods__title');
const goodsItemWrapper = document.querySelector('.goods__item-wrapper');

goodsTitle.innerHTML = `${data[0].name}`;

//Отрисовка "слайдера"

const renderSlider = (item = data[1].colors[0].photos) => {
    const slider = document.querySelector('.slider');

    slider.innerHTML = "";

    const miniSlides = document.createElement('div');
    miniSlides.classList.add('slider__mini-slides')
    slider.appendChild(miniSlides);

    item.forEach((photo, index) => {
        const miniSlide = document.createElement('div');
        miniSlide.dataset.miniIndex = index;
        const photoDiv = new Image();
        photoDiv.src = photo;
        photoDiv.classList.add('slider__mini-slide');

        miniSlide.appendChild(photoDiv);
        miniSlides.appendChild(miniSlide)

        if (index === 0) {
            const slide = document.createElement('div');
            slide.classList.add('slider__slide-div')

            const photoDiv = new Image();
            photoDiv.src = photo;
            photoDiv.classList.add('slider__slide');

            slide.append(photoDiv);
            slider.append(slide);
        }
    });

    miniSlides.addEventListener("click", event => {
        const slide = document.querySelector('.slider__slide');
        slide.src = event.target.src;
    });
}

renderSlider();


data.forEach((item, itemIndex) => {
    const goodsItem = document.createElement('div');
    goodsItem.classList.add('goods__item');
    goodsItemWrapper.appendChild(goodsItem);

    const wrapper = document.createElement('div');
    wrapper.classList.add('goods__item-text-price-wrapper');
    goodsItem.appendChild(wrapper);

    const itemName = document.createElement('div');
    itemName.classList.add('goods__item-text');
    itemName.innerHTML = `${item.name}`;
    wrapper.appendChild(itemName);

    const prices = document.createElement('div');
    prices.classList.add('section-wrapper');
    wrapper.appendChild(prices);

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('goods__item-text');
    itemPrice.innerHTML = `$${item.price}`;
    prices.appendChild(itemPrice);

    if (item.onSale) {
        const saleDiv = document.createElement('div');
        saleDiv.innerHTML = `${item.priceSale}`;
        saleDiv.classList.add('goods__item-text', 'goods__item-text_red');
        prices.appendChild(saleDiv);

        itemPrice.classList.add('goods__item-text_line')
    }

    const line = document.createElement('div');
    line.classList.add('goods__item-line');
    goodsItem.appendChild(line);

    const itemColorsWrapper = document.createElement('div');
    itemColorsWrapper.classList.add('goods__item-colors-wrapper');
    goodsItem.appendChild(itemColorsWrapper);

    itemColorsWrapper.addEventListener('click', (event) => {

    });
    
    item.colors.forEach((color, colorsIndex) => {
        const colorDiv = document.createElement('div');

        const img = new Image();
        img.dataset.dataIndex = itemIndex;
        img.dataset.colorsIndex = colorsIndex;

        img.src = color.miniImages;

        colorDiv.appendChild(img);
        itemColorsWrapper.appendChild(colorDiv);

        colorDiv.addEventListener('click', (e) => {
            goodsTitle.innerHTML = `${item.name}`;
            renderSlider(data[e.target.dataset.dataIndex].colors[e.target.dataset.colorsIndex].photos);
        });
    });
});




