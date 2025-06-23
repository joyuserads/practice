
//const historico = document.getElementById("historico");

/*let numeroDigitados = JSON.parse(localStorage.getItem("numeros")) || []; 
const atualizarHistorico = () => {
    const historico = document.getElementById("historico");
    historico.innerHTML = "";

    numeroDigitados.forEach((n) => {
        const item = document.createElement("li");
        item.textContent = n;
        historico.appendChild(item);
    })
}
*/
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnVerificar").addEventListener("click", function () {
        
        let numeroDigitado = JSON.parse(localStorage.getItem("numeros")) || []; 
        //const numeroDigitado = JSON.parse(localStorage.getItem("numeros")) || [];
        const input = document.getElementById("numeroInput").value.trim();
        const resultado = document.getElementById("resultado");
        const btnLimpar = document.getElementById("btnLimpar");


        const atualizarHistorico = () => {
            const historico = document.getElementById("historico");
            historico.innerHTML = "";
        
            numeroDigitado.forEach((n) => {
                const item = document.createElement("li");
                item.textContent = n;
                historico.appendChild(item);
            })
        }


        

        //validação
        if (input === "") {
            resultado.textContent = "Por favor, digite um número!";
            resultado.style.color = "red";
            return;
        }


        if (isNaN(input)) {
            resultado.textContent = "Invalido!!! digite um número por favor!!!";
            resultado.style.color = "red";
            return
        }

        if (input % 2 === 0) {
            resultado.textContent = `O numero ${input} é Par!`;
            resultado.style.color = "green";

        } else {
            resultado.textContent = `O número ${input} é Impar!`;
            resultado.style.color = "green";
        }

        // SALVA NO ARRAY E NO LOCALSTORAGE
        numeroDigitado.push(input);

        //SALVA NO ARRAY E NO LOCALSTORAGE
        localStorage.setItem("numeros", JSON.stringify(numeroDigitado));

        //atualiza a lista
        atualizarHistorico();


        //limpa o input
       // document.getElementById("numeroInput").value = "";

       btnLimpar.addEventListener("click", () => {
        // Zera o array e limpa o localSTORAGE
        numeroDigitado = [];
        localStorage.removeItem("numeros");

        atualizarHistorico();
        resultado.textContent = "historico limpo!!";
        resultado.style.color = "blue";
       })

        numeroDigitado.forEach((n) => {
            const item = document.createElement("li");
            item.textContent = n;
            historico.appendChild(item);
        });



    });
});


