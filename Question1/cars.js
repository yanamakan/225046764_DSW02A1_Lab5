const makes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];

const cars = [
    { name: "Cabriolet", type: "Cars", make: "Ford", images: ["cabriolet.jpg"] },
    { name: "Benz car", type: "Cars", make: "Benz", images: ["benz.jpg"] },
    { name: "VW car", type: "Cars", make: "VW", images: ["vw.jpg"] },
    { name: "Toyota car", type: "Cars", make: "Toyota", images: ["toyota.jpg"] },
    { name: "BMW car", type: "Cars", make: "BMW", images: ["bmw.jpg"] },
    { name: "Audi car", type: "Cars", make: "Audi", images: ["audi.jpg"] }
]

window.onload = function () {
    let optionList = document.getElementById("make-list")
    for (let i = 0; i < makes.length; i++) {
        let option = document.createElement("option");
        option.value = makes[i];
        option.textContent = makes[i];
        optionList.appendChild(option);
    }
    let currentCar;

    function getRandomCar() {
        let randomIndex = Math.floor(Math.random() * makes.length);
        currentCar = cars[randomIndex]
    }

    function displayCar() {
        document.getElementById("car-name").textContent = currentCar.name;
        document.getElementById("car-type").textContent = currentCar.type;
        document.getElementById("car-img").src = currentCar.images[0];
        document.getElementById("car-img").classList.remove("hidden");
        document.getElementById("guess-btn").classList.remove("disabled");
    }

    getRandomCar();
    displayCar();

    document.getElementById("guess-btn").addEventListener("click", function () {
        document.getElementById("guess-btn").classList.add("disabled");
        let selected = document.getElementById("make-list").value;
        let total = document.getElementById("total");

        if (currentCar.make === selected) {
            let correct = document.getElementById("correct");
            correct.textContent = Number(correct.textContent) + 1;
        }

        total.textContent = Number(total.textContent) + 1;
        getRandomCar();
        displayCar();
    })
}