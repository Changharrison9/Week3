
const thumbnails = document.querySelectorAll('.thumbnail');


const mainImage = document.getElementById('mainImage');


function updateMainImage(event) {
   
    const clickedThumbnail = event.target;
    
    const newImageSrc = clickedThumbnail.src;

    mainImage.src = newImageSrc;
}

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', updateMainImage);
});