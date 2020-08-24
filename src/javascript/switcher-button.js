const button = document.getElementById('switcher-button');
const c1 = document.getElementById('color1');
const c2 = document.getElementById('color2');
const c3 = document.getElementById('color3');
const c4 = document.getElementById('color4');
const c5 = document.getElementById('color5');

button.addEventListener('click', changeBg);

// color palette 

let palette = {
    palette1: {
        c1: "rgb(242,248,222)",
        c2: "rgb(207,219,172)",
        c3: "rgb(138,155,104)",
        c4: "rgb(147,123,99)",
        c5: "rgb(147,31,29)", 

    },
    palette2: {
        c1: "rgb(244,247,190)", 
        c2: "rgb(229,247,125)",
        c3: "rgb(222,186,111)",
        c4: "rgb(186,215,242)",
        c5: "rgb(105,98,109)"
    },
    palette3: {
        c1: "rgb(252,240,204)", 
        c2: "rgb(187,219,180)",
        c3: "rgb(213,106,160)",
        c4: "rgb(166,66,83)",
        c5: "rgb(134,22,87)"
    },
        palette4: {  
        c1: "rgb(255,255,240)", 
        c2: "rgb(226,209,209)",
        c3: "rgb(214,214,158)",
        c4: "rgb(150,188,199)",
        c5: "rgb(73,65,110)"
    },
}

let action = 1;

function changeBg(){
    switch(action) {
        case 1:
            c1.style.backgroundColor = palette.palette1.c1;
            c2.style.backgroundColor = palette.palette1.c2;
            c3.style.backgroundColor = palette.palette1.c3;
            c4.style.backgroundColor = palette.palette1.c4;
            c5.style.backgroundColor = palette.palette1.c5;
            action++;
            console.log(action);
            break;
        case 2:
            c1.style.backgroundColor = palette.palette2.c1;
            c2.style.backgroundColor = palette.palette2.c2;
            c3.style.backgroundColor = palette.palette2.c3;
            c4.style.backgroundColor = palette.palette2.c4;
            c5.style.backgroundColor = palette.palette2.c5;
            action++;
            console.log(action);

            break;
        case 3:
            c1.style.backgroundColor = palette.palette3.c1;
            c2.style.backgroundColor = palette.palette3.c2;
            c3.style.backgroundColor = palette.palette3.c3;
            c4.style.backgroundColor = palette.palette3.c4;
            c5.style.backgroundColor = palette.palette3.c5;
            action++;   
            console.log(action);
            action = 1;
            break;
        // case 4: 
        //     c1.style.backgroundColor = palette.palette4.c1;
        //     c2.style.backgroundColor = palette.palette4.c2;
        //     c3.style.backgroundColor = palette.palette4.c3;
        //     c4.style.backgroundColor = palette.palette4.c4;
        //     c5.style.backgroundColor = palette.palette4.c5;
        //     action = 1;
        //     console.log(action);

        //     break;
    }
};


