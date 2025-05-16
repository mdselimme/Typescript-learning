


// function generics 

function creatPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

const result = creatPair<string, number>('hello', 56);

console.log(result[0])

// Generics in class 

class Student<T> {
    private _value: T | undefined

    constructor(private name: string) { };

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toStrData(): string {
        return `${this.name}: ${this._value}`;
    }

}

const stuResult = new Student<number>('Selim');

stuResult.setValue(10);

console.log(stuResult.toStrData())

// Type Aliases Generics 

type Wrapeed<T> = { value: T };

const wrappedValue: Wrapeed<number> = { value: 10 }

// Interface Generics 

interface WrapInterface<T> {
    value: T
}

const wrapInterface: WrapInterface<string> = { value: "4" };

// Default value in class generics 

class Student2<T = string> {
    private _value: T | undefined

    constructor(private name: string) { };

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toStrData(): string {
        return `${this.name}: ${this._value}`;
    }

}

const stuResult2 = new Student2('Selim');

stuResult2.setValue("47");

console.log(stuResult2.toStrData())


// extends method in generics 

const funcExtendGenericsMethod = <S extends boolean | string, T extends number | boolean>(val1: S, val2: T): [S, T] => {
    console.log(`creating pair: v1 = ${val1}, v2 = ${val2}`)
    return [val1, val2];
};

const resExt = funcExtendGenericsMethod(true, 56);

console.log(resExt)


export { }