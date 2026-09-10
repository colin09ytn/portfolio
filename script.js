// Find every slideshow on the page
const slideshows = document.querySelectorAll(".slideshow");

slideshows.forEach((slideshow) => {

    const slides =
        slideshow.querySelectorAll(".slide");

    const previousButton =
        slideshow.querySelector(".previous");

    const nextButton =
        slideshow.querySelector(".next");

    const currentSlideText =
        slideshow.querySelector(".current-slide");

    const totalSlidesText =
        slideshow.querySelector(".total-slides");


    // If this slideshow has no images, ignore it
    if (slides.length === 0) {
        return;
    }


    let currentIndex = 0;


    // Only update counter if one exists
    if (totalSlidesText) {
        totalSlidesText.textContent = slides.length;
    }


    function showSlide(index) {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });


        // Loop from last image back to first
        if (index >= slides.length) {

            currentIndex = 0;

        }

        // Loop from first image back to last
        else if (index < 0) {

            currentIndex = slides.length - 1;

        }

        else {

            currentIndex = index;

        }


        slides[currentIndex].classList.add("active");


        // Only update if counter exists
        if (currentSlideText) {

            currentSlideText.textContent =
                currentIndex + 1;
        }
    }


    // Only add button functionality if button exists
    if (nextButton) {

        nextButton.addEventListener("click", () => {

            showSlide(currentIndex + 1);

        });
    }


    if (previousButton) {

        previousButton.addEventListener("click", () => {

            showSlide(currentIndex - 1);

        });
    }


    showSlide(0);

});