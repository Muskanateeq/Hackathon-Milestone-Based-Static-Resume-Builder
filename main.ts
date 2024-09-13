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
  
  document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('input[type="range"]');
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.querySelector('.skills') as HTMLElement;

    sliders.forEach(slider => {
      const inputSlider = slider as HTMLInputElement;
      
      inputSlider.addEventListener('input', () => {
        console.log(`${inputSlider.id} value: ${inputSlider.value}`);
      });
    });

    if (toggleButton && skillsSection) {
      toggleButton.addEventListener('click', () => {
        if (skillsSection.classList.contains('skills-hidden')) {
          skillsSection.classList.remove('skills-hidden');
          toggleButton.textContent = 'Hide Skills';
        } else {
          skillsSection.classList.add('skills-hidden');
          toggleButton.textContent = 'Show Skills';
        }
      });
    }
  });
