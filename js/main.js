let div_Cronometro = document.querySelector(".cronometro");
let tiempo;

function iniciar_cronometro(minutos, segundos){
    div_Cronometro.innerHTML = `0${minutos}:${segundos}`;

    function actualizar(){
        if (segundos === 0 && minutos === 0){
            clearInterval(tiempo);
        }

        if (segundos === 0){
            if (minutos >= 1){
                segundos = 60;
                minutos--;
            }
        }
        
        let minutosMostrar = minutos < 10 ? `0${minutos}` : minutos;
        let segundosMostrar = segundos < 10 ? `0${segundos}` : segundos;
        
        div_Cronometro.innerHTML = `${minutosMostrar}:${segundosMostrar}`;
        
        segundos--;
    }

    tiempo = setInterval(actualizar, 1000);
}


iniciar_cronometro(10, 10);

let boton_cronometro = document.createElement("div");
boton_cronometro.innerHTML = `

    <div class="contenedor">
        <button>Inicio</button>
        <input type="text">
    </div>


`

div_Cronometro.appendChild(boton_cronometro)
