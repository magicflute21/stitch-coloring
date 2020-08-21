const c1 = document.getElementById('color1');
const c2 = document.getElementById('color2');
const c3 = document.getElementById('color3');
const c4 = document.getElementById('color4');
const c5 = document.getElementById('color5');
const colors = document.querySelectorAll('.palette__wrapper-colors');
const items = document.querySelectorAll('.frame__grid-items');
let color;

// pick a color from a palette


colors.forEach(function(color){
    color.addEventListener('click', chooseColor);
    // console.log(color);
});

// --------------------------------------

function chooseColor(e){
    color = window.getComputedStyle(e.target).backgroundColor;
    console.log(color);
}



// color the grid items
items.forEach(function(item){
    item.addEventListener('click', function(){
        addColor(this);
    });
});


function addColor(t){
    t.style.backgroundColor = color;
}
