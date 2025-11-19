/// STRING
let str: string = ""
str = "Vicente"

/// BOOLEAN
let bol: boolean = false;
bol = true;

/// NUMBERS
let num: number = 0
num = 34

/// ARRAYS
let array: string[] = []
array.push("vicente")
array.push("Antonio")

let array2: Array<number> = []
array2.push(2);
array2.push(4)

/// ENUM
const enum Color{
    Read,
    Pink,
    Wellow
}

let c : Color = Color.Read

/// FUNCTIONS
function fruits(color: string, type: string) : string {
    return type.concat(" "+color)
}

/// Generic function
function getItems<Type>(items: Type) :Type[]{
 return new Array<Type>().concat(items)
}

class Employee{
    id: number

    name: string

    address: string

    constructor(id: number, name: string, address: string){
        this.id = id
        this.name = name
        this.address = address
    }
}



