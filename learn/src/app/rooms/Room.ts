import { RoomI } from "./RoomI";

export class Room implements RoomI{
    private name: string;
    private capacity: number;
    private id: number;

    constructor(id: number, name: string, capacity: number){
        this.id = id;
        this.name = name;
        this.capacity = capacity;
    }
    
     getName(): string{
        return this.name;
     }
     getCapacity(): number{
        return this.capacity;
     }
     getId(): number{
        return this.id
     }
}