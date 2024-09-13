document.addEventListener('DOMContentLoaded', function () {
    var sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(function (slider) {
        // Type assertion to HTMLInputElement
        var inputSlider = slider;
        inputSlider.addEventListener('input', function () {
            console.log("".concat(inputSlider.id, " value: ").concat(inputSlider.value));
        });
    });
});
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    var sliders = document.querySelectorAll('input[type="range"]');
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.querySelector('.skills');
    sliders.forEach(function (slider) {
        var inputSlider = slider;
        inputSlider.addEventListener('input', function () {
            console.log("".concat(inputSlider.id, " value: ").concat(inputSlider.value));
        });
    });
    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', function () {
            if (skillsSection.classList.contains('skills-hidden')) {
                skillsSection.classList.remove('skills-hidden');
                toggleButton.textContent = 'Hide Skills';
            }
            else {
                skillsSection.classList.add('skills-hidden');
                toggleButton.textContent = 'Show Skills';
            }
        });
    }
});
=======
>>>>>>> 0f0098906ba3586998ef1cb5a76728c1ab167a1c
