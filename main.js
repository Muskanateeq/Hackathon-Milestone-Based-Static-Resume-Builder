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
