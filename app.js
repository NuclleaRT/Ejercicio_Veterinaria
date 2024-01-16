class Animal {
    constructor(nombre,peso,edad){
        this._nombre = nombre;
        this._peso = peso;
        this._edad = edad;
    }
}

class Perro extends Animal{
    constructor(nombre,peso,edad,raza){
        super(nombre,peso,edad);
        this._raza = raza;
    }
}

class Gato extends Animal{
    constructor(nombre,peso,edad,sexo){
        super(nombre,peso,edad);
        this._sexo = sexo;
    }
}

class Conejo extends Animal{
    constructor(nombre,peso,edad,color){
        super(nombre,peso,edad);
        this._color = color;
    }
}

