import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

// const galleryItem = document.createElement("div");
// galleryItem.classList.add("gallery__item");

// const galleryLink = document.createElement('a');
// galleryLink.classList.add("gallery__link");
// galleryLink.href = galleryItems[0].original;

// const img = document.createElement("img");
// img.classList.add("gallery__image");
// img.src = galleryItems[0].preview
// img.alt = galleryItems[0].description;

// galleryLink.append(img);
// galleryItem.append(galleryLink);

// gallery.append(galleryLink);
// console.log(gallery);






// const images = galleryItems.map(({ description, original, preview }) => {
//   const gallery = document.querySelector(".gallery");
//   const galleryItem = document.createElement("div");
//   galleryItem.classList.add("gallery__item");

//   const galleryLink = document.createElement("a");
//   galleryLink.classList.add("gallery__link");
//   galleryLink.href = original;

//   const img = document.createElement("img");
//   img.classList.add("gallery__image");
//   img.setAttribute("data-source", original);
//   console.log(img.getAttribute);
  
//   img.src = preview;
//   img.alt = description;

//   galleryLink.append(img);
//   galleryLink.append(img);
//   gallery.append(galleryLink);

//   // return
// });

// console.log(gallery)

const img = galleryItems
  .map(function (imgEl) {
    const { preview, original, description } = imgEl;
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source= "${original}"
          alt= "${description}"
        />
      </a>
    </div>`;
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", img);



gallery.addEventListener('click', modalClick)

function modalClick(event) { 
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') { 
    return;
  }


  console.log(event.target.dataset.source);


  const src = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
`);

  instance.show();

}




















