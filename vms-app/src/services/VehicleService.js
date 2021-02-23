import axios from 'axios';

const VEHICLE_API_BASE_URL = "http://localhost:9191/api";

class VehicleService {

    getVehicles(){
        return axios.get("http://localhost:9191/api/getAllVehicles");
    }

    createVehicle(vehicle){
        return axios.post("http://localhost:9191/api/addVehicle", vehicle);
    }

    getVehicleById(VehicleId){
        return axios.get("http://localhost:9191/api/getVehicle" + '/' + VehicleId);
    }

    updateVehicle(vehicle, vehicleId){
        return axios.put("http://localhost:9191/api/Sprintboot-rest-demo/updateVehicle" + '/' + vehicleId, vehicle);
    }

    deleteVehicle(vehicleId){
        return axios.delete("http://localhost:9191/api/deleteVehicle" + '/' + vehicleId);
    }
}

export default new VehicleService()