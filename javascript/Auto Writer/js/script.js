let indexText = 0;
let indexArray = 0;

const array = ['Programar', 'Dev', 'FullStack','Frontend','Backend','DevOps'];

const writeText = () => {

    document.body.innerText = array[indexArray].slice(0, indexText);
    indexText++;

    if (indexText > array[indexArray].length){
        indexText = 0;
        indexArray++;
    }

    indexArray = indexArray >= array.length ? 0 : indexArray;
}

setInterval(writeText, 100);