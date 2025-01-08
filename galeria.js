function changeImage(thumbnail, captionText) {
    const mainImage = document.getElementById('main-image');
    const caption = document.getElementById('caption');
    const thumbnails = document.querySelectorAll('.thumbnail');

    mainImage.src = thumbnail.src;
    caption.textContent = captionText;

    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}