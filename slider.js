document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('imageSlider');
    const imageDisplay = document.getElementById('imageDisplay');
    const yearDisplay = document.getElementById('yearDisplay'); // Get the year display element

    slider.oninput = function() {
        const year = this.value;
        const imageName = `graphs/wolf_depr_${year}.png`;
        imageDisplay.src = imageName;
        yearDisplay.textContent = year; // Update the text content of the year display
    }
});
