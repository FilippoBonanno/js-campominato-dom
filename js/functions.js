function squareCreate (quadrato) {
    let square = document.createElement("div");
    square.classList.add("square");
    return square;
}

// CASUAL NUMBER
//Numero casuale tra due numeri max e minimo
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function bombeGenerator() {

    const bombe = [];
    let i = 1;
    while (bombe.length < 16) {
        
            // stampo il numero PC in cosole
        let bombNumber = getRandomNumber(1, 100);

        if (bombe.includes(bombNumber)) {

        } else {

            bombe.push (bombNumber);
        };

        i++;
    }

    return bombe;
	
}



