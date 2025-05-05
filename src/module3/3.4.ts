{
    // Type guard using instance of
    class Car {
        drive() {
            console.log("Driving...");
        }
    }

    class Truck {
        drive() {
            console.log("Driving truck...");
        }

        loadCargo() {
            console.log("Loading cargo...");
        }
    }

    function useVehicle(vehicle: Car | Truck) {
        vehicle.drive();
        if (vehicle instanceof Truck) {
            vehicle.loadCargo();
        }
    }

}