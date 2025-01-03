document.getElementById('get-palette').addEventListener('click', async () => {
    const baseColor = document.getElementById('base-color').value.slice(1); // Remove the '#' from the color code
    const colorMode = document.getElementById('color-mode').value;

    // Send request to the Color API
    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=${colorMode}&count=5`);
    const data = await response.json();

    // Clear previous palette
    const paletteContainer = document.getElementById('palette-container');
    paletteContainer.innerHTML = '';

    // Display the colors
    data.colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color.hex.value;
        colorBox.textContent = color.hex.value;

        // Add event listener to copy hex value to clipboard
        colorBox.addEventListener('click', () => {
            navigator.clipboard.writeText(color.hex.value).then(() => {
                alert(`Đã sao chép: ${color.hex.value}`);
            });
        });

        paletteContainer.appendChild(colorBox);
    });
});
