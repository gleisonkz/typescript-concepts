namespace TS.Operators {
  // Non-null assertion operator

  /* 
   Como o strict mode do TS está ativo ele irá ficar
   reclamando se vc não fizer a verificação antes se
   sua variável não é null 

   Pois o querySelector tem a possibilidade de retornar null
*/
  {
    const $list = document.querySelector(".list");
    $list.textContent = "Changed";
  }

  /* Porem pode ocorrer situações onde sabemos que nossa 
   variável ou expressão não irá retornar null e para 
   explicitarmos isso ao compilador utilizamos o operador Non-null assertion.   
*/

  {
    const $list = document.querySelector(".list");
    // apenas colocando o sinal ! o compilador do TS irá para de reclamar.
    $list!.textContent = "Changed";
  }
}
