const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', async () => {
      try {
        await image.requestFullscreen();
      } catch (error) {
        console.error('Fail to trigger fullscreen for image', error);
      }
    });
})
