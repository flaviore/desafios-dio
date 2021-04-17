
//const input = "Voce _deveria_ ver a foca no zoologico! Marque a conta *a receber* para *paga*." //require('fs').readFileSync('/dev/stdin', 'utf8');
const input = "_ _ __ _ yabba dabba _ * dooooo * ****";
const lines = input.split('\n');

// saida esperada para o teste 1
const output1 = "Voce <i>deveria</i> ver a foca no zoologico! Marque a conta <b>a receber</b> para <b>paga</b>.";

// saida esperada para o teste 2
const output2 = "<i> </i> <i></i> <i> yabba dabba </i> <b> dooooo </b> <b></b><b></b>";

while (true) {
  let string = lines.shift();

  if (!string) {
    break;
  }

  const letters = string.split("");
  const formattedLetters = letters;

  //let searchingItalicEndTag = false;
  //let searchingBoldEndTag = false;
  
  let p = true;

  for (let i = 0; i < letters.length; i++) {
   //continue a solução 
    letter = letters[i];

    if (letter === "_") {
       //continue a solução 
      if (p){
        formattedLetters[i] = "<i>"
        p = false;
        continue;
      }else{
        formattedLetters[i] = "</i>"
        p = true;
        continue;
      }
      
    } else if (letter === "*") {
    //continue a solução 
    
      if (p){
        formattedLetters[i] = "<b>"
        p = false;
        continue;
      }else{
        formattedLetters[i] = "</b>"
        p = true;
        continue;
      }
    }
  }
  
  console.log(formattedLetters.join(""));
      
  /* console.log("Voce <i>deveria</i> ver a foca no zoologico! Marque a conta <b>a receber</b> para <b>paga</b>.");
  
  if (formattedLetters.join("") === output1){
      console.log("Primero teste OK.")

  }else{
      console.log("Não passou no primeiro teste!")
  } */

  console.log(output2); 
  
  if (formattedLetters.join("") === output2){
    console.log("Segundo teste OK.")

    }else{
        console.log("Não passou no segundo teste!")
    
  }


}