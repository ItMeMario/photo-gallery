import { Geolocation } from "@capacitor/geolocation";


export interface location {
    altitude: number | null;
    latitude: number;
    longitude: number;
}
export function maps() {
    
        const posicao = {
            altitude: null,
            longitude: 0,
            latitude: 0,
        }
    

    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log("Current", coordinates);
    };

    const getCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        // posicao.altitude = coordinates.coords.altitude;
        posicao.latitude = coordinates.coords.latitude;
        posicao.longitude = coordinates.coords.longitude;

        return posicao;
    };

    return {
        printCurrentPosition,
        getCurrentPosition
    }
}