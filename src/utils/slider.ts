export const initSlider = () => {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (!slider) {
        return;
    }

    const sliderItems = slider.querySelectorAll('.slider-item') as NodeListOf<HTMLElement>;

    sliderItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('slider-item-next')) {
                const current = slider.querySelector('.slider-item-current') as HTMLElement;
                const prev = slider.querySelector('.slider-item-prev') as HTMLElement;
                current.classList.remove('slider-item-current');
                current.classList.add('slider-item-prev');
                prev.classList.remove('slider-item-prev');
                prev.classList.add('slider-item-next');
                item.classList.remove('slider-item-next');
                item.classList.add('slider-item-current');
            }

            if (item.classList.contains('slider-item-prev')) {
                const current = slider.querySelector('.slider-item-current') as HTMLElement;
                const next = slider.querySelector('.slider-item-next') as HTMLElement;
                current.classList.remove('slider-item-current');
                current.classList.add('slider-item-next');
                next.classList.remove('slider-item-next');
                next.classList.add('slider-item-prev');
                item.classList.remove('slider-item-prev');
                item.classList.add('slider-item-current');
            }
        })
    })
}
