document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('input[type="range"]');
  
    sliders.forEach(slider => {
      // Type assertion to HTMLInputElement
      const inputSlider = slider as HTMLInputElement;
      
      inputSlider.addEventListener('input', () => {
        console.log(`${inputSlider.id} value: ${inputSlider.value}`);
      });
    });
  });
  