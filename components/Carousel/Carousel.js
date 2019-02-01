class Carousel {
    //  grab a reference to the carousel, and in it grab the left and right buttons
    //  grab a reference to all of the images
    constructor(carousel) {
        this.carousel = carousel;
        this.images = document.querySelectorAll('.carousel img')
        this.imagesmap = Array.from(this.images)
        this.current = this.images[0]; // Create a current index
        this.current.style.display = 'inline-block';
        this.carousel.addEventListener('click', () => {this.arrowSelection()}  // buttons are gonna need some click handlers.
        );
    }
    arrowSelection() {
        // make the cards slide out if the left button is clicked
        if (this.carousel.classList.contains('left-button')) {
        this.current.style.display = 'none';
        this.imagesmap.unshift(this.imagesmap.pop());    //unshift and pop array methods used for this solution 
        this.current = this.imagesmap[0];
        this.current.style.display = 'inline-block';
        }

        //make the cards slide in if the right button is clicked
        else if (this.carousel.classList.contains('right-button')) {
        this.current.style.display = 'none';
        this.imagesmap.push(this.imagesmap.shift());    //push and shift array methods used for this solution
        this.current = this.imagesmap[0];
        this.current.style.display = 'inline-block';
        };
    }
}


let carousel = document.querySelectorAll('.carousel, .left-button, .right-button');
carousel.forEach(item => new Carousel(item));

