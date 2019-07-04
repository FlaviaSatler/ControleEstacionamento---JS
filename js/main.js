(function () {
    const $ = q => document.querySelector(q);

    function renderGarage() {
        const garage = getGarage();

        garage.forEach(c => addCarToGarage(c));
    }

    function addCarToGarage (car) {
        const row= document.createElement("tr");
        row.innerHTML = `
            <td>${car.name}</td>
            <td>${car.licence}</td>
            <td>${new Date(car.time)
                .toLocaleString("pt-BR", {
                hour: "numeric",
                minute: "numeric"
            })}</td>
            <td>
                <button class="delete">X</button>
            </td>
        `;

        garage.appendChild(row);
    };

    const getGarage = () => localStorage.garage ? JSON.parse (localStorage.garage) :[];

    renderGarage();
    $('#send').addEventListener("click", function(){
        const name = $('#name').value;
        const licence = $('#licence').value;

        if (!name || !licence) {
            alert('Os campos são obrigatórios !')
            return;
        }
        
        const car = {name, licence, time: new Date()}

        const garage = getGarage();
        garage.push(car);

        localStorage.garage = JSON.stringify(garage)

        addCarToGarage(car);

        $('#name').value = "";
        $('#licence').value = "";
    })
})()