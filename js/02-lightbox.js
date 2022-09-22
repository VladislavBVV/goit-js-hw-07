


import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const images = galleryItems.map(({ description, original, preview }) => {
  const gallery = document.querySelector(".gallery");
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("data-source", original);
  console.log(img.getAttribute);

  img.src = preview;
  img.alt = description;

  galleryLink.append(img);
  galleryLink.append(img);
  gallery.append(galleryLink);

  // return
});


// gallery.insertAdjacentHTML("afterbegin", img);
// console.log(gallery);


let galleryLightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
