console.log("prueba calculadora dias laborales🥷")
// doy todo el cédito a mi compañero de clase Alan Escobedo.
// Hizo un blog con el paso a paso, se rifó y gracias a ello pude hacer todo esto.

const diasSemana= ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

function calcularFecha(){

    const dayInput = document.getElementById ("day").value;
    const monthInput = document.getElementById ("month").value;
    const yearInput = document.getElementById ("year").value;

    console.log({dayInput, monthInput, yearInput});

    const date = new Date (yearInput, monthInput -1, dayInput);
    const dayIndex = date.getDay();

    const dayLabel = diasSemana[dayIndex];
    let message = "";

    switch (dayIndex) {
        case 0: case 6:
            message = "No se labora!";
            break;
        default:
            message = "Día laboral🌞";
            break;
    }

    console.log(dayLabel);

    console.log(date);
    console.log({ dayIndex });

    const resultElement = document.getElementById('result');
    resultElement.value = `${dayLabel}, ${message}`;
    
    console.log (resultElement);
}

