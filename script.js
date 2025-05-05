document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "0616gallery07.jpg",
        "istanbul-168774_640.jpg",
        "art-gallery-to-visit-in-bangalore.jpg",
        "exhibition_banner_1.jpg "
    ];

    let currentIndex = 0;

    const mainImage = document.getElementById("current-image");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function updateMainImage(index) {
        mainImage.src = images[index];
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentIndex = index;
            updateMainImage(currentIndex);
        });
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateMainImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateMainImage(currentIndex);
    });
});
