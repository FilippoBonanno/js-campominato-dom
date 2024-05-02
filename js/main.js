// mi seleziono il container dove inserirò le celle
let grid = document.getElementById ("grid");

// SELEZIONO IL BUTTON CHE RENDERò CLICCABILE
let buttonClick = document.getElementById ("button");



buttonClick.addEventListener("click", function() {

    // Chiamata alla funzione per generare le bombe
    const bombe = bombeGenerator();
    console.log("Bombe generate:", bombe);

    
    grid.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
        let quadrato = squareCreate(i);
    
        quadrato.addEventListener("click", function() {
            
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
                
            };
        });
        
    grid.append(quadrato);
     
    }
  });
 

  
