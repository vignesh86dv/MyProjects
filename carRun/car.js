const car = {
	fuelTank: 50,
    milage: 0.5,
    move() {
    	const kms = Math.floor(Math.random() * 7)
        return kms
    }
}

class PetrolPump {
	fueling = 30
}

const game = {
	road: Array(100),
    currentPosition:0,
    placePetrolPumps() {
    	for(let i=0; i < 6; i++) {
        	const randomPlace = Math.floor(Math.random() * this.road.length)
            const petrolPump = new PetrolPump()
            this.road[randomPlace] = petrolPump
        }
    },
    start(){
    console.log("Started --")
    	this.placePetrolPumps()
        console.log("Road --", this.road)
    	for(let i = 1; i <= car.fuelTank; i++ ) {
        	console.log("Trip Started --")
        	const distanceMoved = car.move()
            console.log("Distance Moved --", distanceMoved)
            this.currentPosition += distanceMoved
            const fuelSpent = ((car.milage * 2) * 2) * distanceMoved
            car.fuelTank -= fuelSpent
            if(this.road[this.currentPosition] instanceof PetrolPump ) {
            	car.fuelTank += this.road[this.currentPosition].fueling
            }
            
            if(this.currentPosition >= this.road.length) {
            	break;
            }
            
            const carStatus = `Move ${i} - car at ${this.currentPosition}, petrol remaining ${car.fuelTank}`
           	alert(carStatus);
        }
    }
    
}

game.start()