let petrol = 50, distance = 0, mileage = 0.5, petrolPump = [], carStep;
let petrolBurnt, started = 1, count = 1, move, displayBox;

function stepBelowSix() {
    while (petrol >= 0) {
        carStep = Math.floor(Math.random() * 10);
        if (carStep > 0 && carStep <= 6) {
            distance = distance + carStep;
            checkPetrol();
            petrolBurnt = carStep / mileage;
            if (petrolBurnt <= petrol) {
                petrol = petrol - petrolBurnt;
                if (petrol > 0) {
                    move = document.createElement("p");
                    move.innerText = `Move ${count} - car at ${distance}, petrol remaining ${petrol}`;
                    displayBox.append(move);
                    count++;
                } else if (petrol === 0) {
                    move = document.createElement("p");
                    move.innerText = `Move ${count} - car at ${distance}, petrol remaining ${petrol}, Game over.`;
                    displayBox.append(move);
                    break;
                }
            } else if (petrolBurnt > petrol) {
                distance = distance - carStep;
                carStep = petrol / mileage;
                distance = distance + carStep;
                petrol = 0;
                move = document.createElement("p");
                move.innerText = `Move ${count} - car at ${distance}, petrol remaining ${petrol}, Game over.`;
                displayBox.append(move);
                break;
            }
        }
    }
}

function pumpGenerator() {
    if (petrolPump.length < 6) {
        let newPump;
        for (let i = 0; i <= 5; i++) {
            newPump = Math.floor(Math.random() * 100);
            if (newPump > 0) {
                let duplicate = petrolPump.includes(newPump);
                if (duplicate !== true) {
                    petrolPump.push(newPump);
                } else {
                    i--;
                }
            } else {
                i--;
            }
        }
        petrolPump.sort((a, b) => a - b);
    }
}


function checkPetrol() {
    for (let i = 0; i <= 5; i++) {
        if (distance === petrolPump[i]) {
            petrol += 30;
        }
    }
}

function runTheCar() {
    if (started === 1) {
        pumpGenerator();
        createBox();
        stepBelowSix();
        started++;
    } else if (started >= 2) {
        petrol = 50, distance = 0, carStep = 0, mileage = 0.5,
        petrolPump = [], petrolBurnt = 0, count = 1;
        let reStart = document.querySelector(".display");
        reStart.remove();
        pumpGenerator();
        createBox();
        stepBelowSix();
    }
}

function createBox(){
    displayBox = document.createElement("div");
    displayBox.classList.add("display");
    document.body.append(displayBox);
    let gameStart = document.createElement("p");
    gameStart.innerText = "Game started!";
    displayBox.append(gameStart);
    let petrolPumpStation = document.createElement("p");
    petrolPumpStation.innerText = `Petrol pumps generated at ${petrolPump}`;
    displayBox.append(petrolPumpStation);
}