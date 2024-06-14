import React from 'react'

export default function app() {
    let name: string = "Mohit"
    console.log("Type of name is ", typeof name, " and its value is: ", name);

    // type any will turn of typescript and we can work with any types of types using it 



    let variable: unknown = "Bold me"
    // for type unknown, we have to first check for type and only then we can perform functions on it. So the below line of code will not work
    // variable.toUpperCase()

    // Insted we have to do it this way
    if (typeof variable === "string") {
        // Now TypeScript knows that variable is a string within this block
        variable = variable.toUpperCase();
    }

    console.log("Bolded variable value: ", variable);




    // Typescript array
    const array: string[] = [];
    array.push("one")

    console.log("Array: ", array);

    // We cannot push number in array

    // readonly will prevent array from being changed
    const newArray: readonly number[] = [1, 2, 3]
    // newArray.push(4) -->  will give error "Property 'push' does not exist on type 'readonly number[]'"





    // Tuple --> A tuple is a typed array with a pre-defined length and types for each index.
    const tuple: [number, boolean, string] = [23, true, "MNK"]
    console.log("Tuple: ", tuple);

    // destructuring tuple
    const [age, valid, nickName] = tuple;
    console.log("Nickname: ", nickName);

    // Named tuples -->  Named tuples provide more context for what our index values represent.
    const numberedTuple: [xAxis: number, yAxis: number] = [23, 32]




    // Typescript object
    // [index: string]: any is called index signatures
    // and ? with age is called optional property, meaning if we include it or not does not matter, it'll not give error
    const obj: { name: string, age?: number, [index: string]: any } = {
        name: "Mohit",
        age: 25,
        isHappy: false
    }

    console.log("Object: ", obj);




    // An enum is a special "class" that represents a group of constants (unchangeable variables). Enums come in two flavors string and numeric. Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.
    enum earthDirections {
        // If we set the value of first numeric enum, it will auto increment for other enums
        North = 90,
        South,
        East,
        West
    }

    // In TypeScript, enums create both forward and reverse mappings
    // For number we will notice reverse mapping (25: "age") even thought we havent defined it inside of our enum class
    enum mixedVars {
        name = "Mohit",
        age = 25
    }

    console.log("Earth directions (enum) : ", earthDirections);
    console.log("Mixed variables (enum) : ", mixedVars);



    // Typescript type aliases and interfaces
    // TypeScript allows types to be defined separately from the variables that use them. Aliases and Interfaces allows types to be easily shared between different variables/objects.
    type name = string
    type age = number
    type eat = boolean
    type animal = {
        name: name,
        age: age,
        eats: eat
    }

    const dogsName: name = "Jacky"
    const dogsAge: age = 5
    const doesDogEats: eat = true
    const Jacky: animal = {
        name: dogsName,
        age: dogsAge,
        eats: doesDogEats
    }

    console.log("Animal aliases: ", Jacky);

    // Interfaces are similar to type aliases, except they only apply to object types.
    interface area {
        height: number,
        width: number
    }

    const square: area = {
        height: 10,
        width: 20
    }

    const area = square.height * square.width
    console.log("Area of square: ", area);

    // interface can also extend each others definition
    interface volume extends area {
        depth: number
    }

    const cuboid: volume = {
        height: 10,
        width: 20,
        depth: 11
    }

    const volume = cuboid.height * cuboid.width * cuboid.depth
    console.log("Volume of cuboid: ", volume);





    // Typescript union types
    // Union types are used when a value can be more than a single type. Such as when a property would be string or number.
    function multipleType(print: string | number | boolean) {
        return `I can be either a number or string, check me: ${print}`
    }

    console.log(multipleType("I am String"));
    console.log(multipleType(25));
    console.log(multipleType(true));




    // Typescript functions 
    // Typescript has specific syntax for writing functions parameters and return values

    // The type of the value returned by the function can be explicitly defined.
    function todaysDate(): string {
        return Date()
    }
    console.log("Date: ", todaysDate().slice(0, 15));

    // The type void can be used to indicate a function doesn't return any value.
    function callMe(): void {
        console.log("Im useless");
    }
    callMe()

    // typescript function parameters
    // c is and optional parameter below
    function addMe(a: number, b: number, c?: number): number {
        return a + b
    }
    console.log("Sum of 10 and 23 is: ", addMe(10, 23));

    // typescript default parameter
    function pow(value: number, exponent: number = 2): number {
        return value ** exponent
    }
    console.log("Power of 2^2: ", pow(2));

    // Named parameter
    function userDetails({ name, age, role, working }: { name: string, age: number, role: string, working: boolean }): void {
        console.log(`Users name is ${name} and his/her age is ${age} with role of ${role} and is currently ${working ? "working" : "not working"}`);
    }
    userDetails({
        name: "Mohit",
        age: 25,
        role: "Full stack developer",
        working: false
    })

    // Rest parameter can be typed like a normal parameter, but the type must be an array because rest parameters are always array
    function sum(a: number, b: number, ...rest: number[]) {
        // The reduce method in JavaScript is used to accumulate all the elements in an array into a single value.
        return a + b + rest.reduce((acc, curr) => acc + curr)
    }
    console.log("Sum of array is: ", sum(1, 2, 3, 4, 5));

    // Aliases in function
    type negate = (value: number) => number
    const negateFunction: negate = (value) => {
        return value * -1
    }
    console.log(`Negated value of 23 is ${negateFunction(23)}`);




    // Type casting
    // There are times when working with types where it's necessary to override the type of a variable. Casting is the process of overriding a type
    const num: unknown = "vnfjnvjsfv"
    console.log((num as string).length);

    let x = 'hello';
    console.log(((x as unknown) as any).length);




    // Typescript generics
    function whatAmI<ElementType>(param: ElementType): ElementType {
        return param
    }

    const paramOne = whatAmI("mnk")
    const paramTwo = whatAmI(323)
    console.log("Param one: ", typeof paramOne);
    console.log("Param two: ", typeof paramTwo);

    type Response<Data> = {
        data: Data,
        error: boolean
    }

    const response: Response<{ name: string, role: string, age: number }> = {
        data: {
            name: "MNK",
            role: "Full stack developer",
            age: 25
        },
        error: false
    }

    console.log("Response: ", response);





    // Typescript utility types
    // TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
    // --> Partial: Partial changes all the properties in an object to be optional.
    interface userInfo {
        name: string,
        age: number
    }

    const userOne: Partial<userInfo> = {
        name: "Mohit"
    }
    console.log("Partial: ", userOne);

    //  --> Required: Required changes all the properties in an object to be required.
    interface carInfo {
        name: string,
        model: number,
        mileage?: number
    }

    const car: Required<carInfo> = {
        name: "Polo",
        model: 2012,
        mileage: 16
    }
    console.log("Required: ", car);

    //  --> Record: Record is a shortcut to defining an object type with a specific key type and value type.
    const nameAndAgeMap: Record<string, number> = {
        "Mohit": 25,
        "Meena": 49
    }
    console.log("Age Map: ", nameAndAgeMap);

    // --> Omit: Omit removes keys from an object type.
    interface Person {
        name: string,
        age: number,
        location?: string
    }

    const person: Omit<Person, 'age'> = {
        name: "Mohit"
    }
    console.log("Omit: ", person);

    // --> Pick: Pick removes all but the specified keys from an object type.
    const personTwo: Pick<Person, 'name'> = {
        name: "Mohit"
    }
    console.log("Pick: ", personTwo);

    // --> Exclude: Exclude removes types from a union.
    type ExcludeValue = string | number | boolean
    const value: Exclude<ExcludeValue, string> = true
    console.log("Exclude: ", value);

    // --> ReturnType: ReturnType extracts the return type of a function type.
    type FunctionType = () => { x: number, y: string }
    const myFuncObj: ReturnType<FunctionType> = {
        x: 24,
        y: "Axis"
    }
    console.log("Return Type: ", myFuncObj);

    // --> Parameters: Parameters extracts the parameter types of a function type as an array.
    // Parameters utility type extracts the parameter types of a function type as a tuple, not as an object.
    type ParameterType = (params: { x: string; y: number }) => void
    const myParamObj: Parameters<ParameterType>[0] = {
        x: "Axis",
        y: 180
    }
    console.log("Parameters: ", myParamObj);

    // --> Readonly: Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
    interface Person {
        name: string;
        age: number;
    }
    const personThree: Readonly<Person> = {
        name: "Dylan",
        age: 35,
    };
    // personThree.name = 'Israel'; --> Cannot assign to 'name' because it is a read-only property.





    // Typescript KeyOf
    // In TypeScript, the keyof keyword is used to create a type that represents the keys of an object type. This can be particularly useful for creating type-safe access to object properties and for working with mapped types.
    type Example = {
        id: number,
        valid: boolean
    }

    // keys will be a union of 'id' and 'valid'
    type keys = keyof Example;

    let key: keys
    key = "id" //Valid
    key = "valid" //valid
    // key = "name" --> not valid

    type StringMap = {
        [key: string]: unknown
    }

    function stringPair(paramOne: keyof StringMap, paramTwo: string): StringMap {
        return {
            [paramOne]: paramTwo
        }
    }

    console.log("String pair: ", stringPair("FirstCharacter", "A"));







    // Nullish Coalescence
    function printMileage(mileage: number | null): void {
        console.log(`Mileage is: ${mileage ?? "Not Available"}`);
    }
    printMileage(null)
    printMileage(14)


    // Null Assertion
    function getValue(): string | undefined {
        return 'hello';
    }
    let valueOne = getValue();
    console.log('value length: ' + (valueOne as string).length);
    console.log('value length using null assertion: ' + valueOne!.length);


    return (
        <div>app</div>
    )
}
