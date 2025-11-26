export interface RoomI{

    getRoomNumber(): string;
    getRoomType(): string;
    getAmenities(): string;
    getPrice(): number;
    getPhotos(): string;
    getCheckinTime(): Date;
    getCheckoutTime(): Date;
    getRating(): number;

}

