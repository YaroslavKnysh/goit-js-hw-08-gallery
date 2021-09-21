function slidePicture(e) {
  let nextIndex = 0;
  const currentIndex = galleryItems.indexOf(
    galleryItems.find(item => item.description === largeImage.alt),
  );
  console.log(e);
  if (e.key == 'ArrowRight') {
    nextIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
  }
  if (e.key == 'ArrowLeft') {
    nextIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
  }

  largeImage.src = galleryItems[nextIndex].original;
  largeImage.alt = galleryItems[nextIndex].description;
}
