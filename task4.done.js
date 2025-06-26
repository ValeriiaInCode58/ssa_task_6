function updateWindowSize() {
    const display = document.getElementById('sizeDisplay');
    display.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
}

window.addEventListener('load', updateWindowSize);

window.addEventListener('resize', updateWindowSize);

module.exports = { updateWindowSize };