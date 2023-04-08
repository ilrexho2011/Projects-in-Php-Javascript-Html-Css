//Vargu me 7 ngjyrat bazike
let ngjyrat = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];



// ndryshimi i ngjyres ne sfond kur klikohet butoni
let button = document.getElementById('button');

button.addEventListener('click', function(){
    //gjenerohet indeksi per nje nga 7 ngjyrat ne menyre rastesore nga 0 - 6
    let index = parseInt((Math.random()*ngjyrat.length)+1);
    //terhiqet sfondi
    let sfondi = document.getElementById('sfondi');
    //ngjyroset sfondi
    sfondi.style.background = `${ngjyrat[index]}`
})