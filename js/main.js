(function () {
    const $ = q => document.querySelector(q);

    function addCarToGarage (car) {
        const row= document.createElement("tr");
        row.innerHTML = `
            <td>${car.name}</td>
            <td>${car.licence}</td>
            <td>${car.time}</td>
            <td>
                <button class="delete">X</button>
            </td>
        `;

        garage.appendChild(row);
    }

    const register = $('#send');
    register.addEventListener("click", function(){
        const name = $('#name').value;
        const licence = $('#licence').value;

        if (!name || !licence) {
            alert('Os campos são obrigatórios !')
            return;
        }
        
        const car = {name, licence, time: new Date()}

        const garage = localStorage.garage ? JSON.parse (localStorage.garage) : [];
        garage.push(car);
        localStorage.garage = JSON.stringify(garage)
        console.log (garage)

        addCarToGarage(car);

        $('#name').value = "";
        $('#licence').value = "";
    })
})()