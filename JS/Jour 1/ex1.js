function printLine(nb_spaces, nb_char, lineChar = "*"){
    console.log(" ".repeat(nb_spaces) + lineChar.repeat(nb_char));
}

function sapin(x_init, x = x_init){
    if(x > 0){
        sapin(x_init, x-1);
        printLine(x_init - x, x * 2 - 1);
        if (x_init === x){
            printLine(x_init - 1, 1, "|");
            console.log("");
        }
    }
}

//sapin(3);


function displaySapin (hauteur) {
    let o = "o", sp = " ";
    for (let i = 1; i <= hauteur; i++) {
        let nbSpace = hauteur - i;
        let nbO = i * 2 - 1;
        console.log(sp.repeat(nbSpace) + o.repeat(nbO));
    }
    console.log(sp.repeat(hauteur - 1) + '|');
}

displaySapin(50000);