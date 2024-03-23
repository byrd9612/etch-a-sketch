let gridContainer = document.querySelector('.container');
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';

    for (i=0; i <256; i++) {
        let square = document.createElement('div');
        gridContainer.insertAdjacentElement('beforeend', square)
}