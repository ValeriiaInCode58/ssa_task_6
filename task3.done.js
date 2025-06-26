function removeSelectedOption() {
    const select = document.getElementById('mySelect');
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
}

module.exports = { removeSelectedOption };