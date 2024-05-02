// mi seleziono il container dove inserirò le celle
let grid = document.getElementById ("grid");

// SELEZIONO IL BUTTON CHE RENDERò CLICCABILE
let buttonClick = document.getElementById ("button");


let errori = 0;
let punteggio = 0;
buttonClick.addEventListener("click", function() {

    // Chiamata alla funzione per generare le bombe
    const bombe = bombeGenerator();
    console.log("Bombe generate:", bombe);
    
    grid.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
        let quadrato = squareCreate(i);
    
        quadrato.addEventListener("click", function() {
            this.removeEventListener("click", arguments.callee);
            quadrato.classList.toggle("active");
    
            if (quadrato.classList.contains("active")) {
                
                quadrato.innerText = (i);
                console.log (i);
            } else {
                quadrato.innerText = "";
            }

            // se i è contenuto nell'array bombe allora aggiungi a quadrato la classe bomba
            if (bombe.includes(i)) {
                quadrato.classList.remove("active");
                quadrato.classList.add("bomba");
                errori += 1 ;
                document.getElementById("bombe").innerText = (errori);
                if (errori >= 3) {
                    alert("HAI PERSO!!!");
                    
                    // ricarica la pagina dopo l'alert
                    window.location.reload();
                }   
            }else {
                punteggio += 1 ;
                document.getElementById("punteggio").innerText = (punteggio);
                if (punteggio >= 35) {
                    alert("HAI VINTO!!!");
                    setTimeout(function() {
                        window.location.reload();
                    }, 3000); 
                    // Attendi 3 secondi prima di ricaricare la pagina
                }
            };

            
        });

    
        
    grid.append(quadrato);
    }


});
console.log(`Hai fatto: ${errori} Errori`);
console.log(`il tuo punteggio è: ${punteggio} Punti`);
 

  
