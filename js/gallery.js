import galleryItems from "./gallery-items.js";

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryRef = document.querySelector('ul.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImgRef = document.querySelector('.lightbox__image');
const modalRef = document.querySelector('div.lightbox');
const btnCloseRef = document.querySelector('button[data-action="close-lightbox"]');

galleryItems.forEach(({preview, original, description}, index) => {

    const listRef = document.createElement('li');
    const linkRef = document.createElement('a');
    const imageRef = document.createElement('img');

    imageRef.setAttribute('src', preview);
    linkRef.setAttribute('href', original);
    imageRef.setAttribute('data-source', original);
    imageRef.setAttribute('alt', description);
    imageRef.setAttribute('data-id', index);

    galleryRef.append(listRef);
    listRef.append(linkRef);
    linkRef.append(imageRef);

    listRef.classList.add('gallery__item');
    linkRef.classList.add('gallery__link');
    imageRef.classList.add('gallery__image');

});

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.

galleryRef.addEventListener('click', event => {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
    lightboxImgRef.src = event.target.dataset.source;
    lightboxImgRef.alt = event.target.alt;

    // let indexElement = Number(event.target.dataset.id);

    modalRef.classList.add('is-open');

} )

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.

function onClickCloseButton(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    modalRef.classList.remove('is-open');
    lightboxImgRef.src = "";
    lightboxImgRef.alt = "";
};

btnCloseRef.addEventListener('click', onClickCloseButton);

// Закрытие модального окна по клику на div.lightbox__overlay.

function onClickOverlay(event) {
        
  if (event.target.nodeName !== "DIV") {
      return;
  };
  modalRef.classList.remove('is-open');
  lightboxImgRef.src = "";
  lightboxImgRef.alt = "";
};

modalRef.addEventListener('click', onClickOverlay);

function onClickKeydownEscape(event) { 
  if (event.code === 'Escape') {
    modalRef.classList.remove('is-open');
    lightboxImgRef.src = "";
    lightboxImgRef.alt = "";
  }  
}

window.addEventListener('keydown', onClickKeydownEscape);



// Создай галерею с возможностью клика по ее 
// элементам и просмотра полноразмерного изображения в модальном окне.

// Разбей задание на несколько подзадач:
// 1 - Создание и рендер разметки по массиву данных и предоставленному шаблону.

/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */

// 2 - Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// 3 - Открытие модального окна по клику на элементе галереи.
// 4 - Подмена значения атрибута src элемента img.lightbox__image.
// 5 - Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// 6 - Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, 
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

// Дополнительно:
// Следующий функционал не обязателен при сдаче задания, 
// но будет хорошей практикой по работе с событиями.
// 1 - Закрытие модального окна по клику на div.lightbox__overlay.
// 2 - Закрытие модального окна по нажатию клавиши ESC.
// 3 - Пролистывание изображений галереи в открытом модальном окне 
// клавишами "влево" и "вправо".