
export class Room {
    // make these public so plain objects from HTTP have the expected properties
    roomNumber: string;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;

    constructor(
        roomNumber: string = '',
        roomType: string = '',
        amenities: string = '',
        price: number = 0,
        photos: string = '',
        checkinTime: Date = new Date(),
        checkoutTime: Date = new Date(),
        rating: number = 0
    ){
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.amenities = amenities;
        this.price = price;
        this.photos = photos;
        this.checkinTime = checkinTime;
        this.checkoutTime = checkoutTime;
        this.rating = rating;
    }
    
}