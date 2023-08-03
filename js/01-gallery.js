import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const container = document.querySelector(`.gallery`);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("")
}

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener(`click`, handlerProductBigPicture)

function handlerProductBigPicture(evt) {
    evt.preventDefault;    
    const bigPicture = evt.target.dataset.source;    
    const instance = basicLightbox.create(`<img src='${bigPicture}'>`);
    instance.show();
    window.addEventListener(`keydown`, toExit);
    function toExit(event) {
    if (event.code === `Escape`) {
        closeModal();
    }
}
    function closeModal() {
        window.removeEventListener(`keydown`, toExit);
        instance.close();
}
}


 