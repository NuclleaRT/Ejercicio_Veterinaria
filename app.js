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

let Perrito = new Perro('Chomosuke', 15, 5, 'Pastor Aleman');
let Gatito = new Gato('Ban', 5, 3, 'Masculino');
let Conejito = new Conejo('Bad', 4 , 1 , 'Blanco');

let veterinaria = [Perrito,Gatito,Conejito];

function mostrarDatos(){
    let txtMostrar = document.getElementById('txtLista');

    

    for(let animal of veterinaria){
        let crearLi = document.createElement('li');
    if(animal == Perrito){
        crearLi.innerText = 'Nombre: ' + animal._nombre + '\n' + 'Peso : ' + animal._peso + 'Kg' + '\n' +
                            'Edad: ' + animal._edad + 'años'+'\n' + 'Raza: ' + animal._raza + '\n'+ '\n';
    }else if(animal == Gatito){
        crearLi.innerText = 'Nombre: ' + animal._nombre + '\n' + 'Peso : ' + animal._peso + 'Kg' + '\n' +
                            'Edad: ' + animal._edad + 'años'+'\n' + 'Sexo: ' + animal._sexo + '\n' + '\n';
    }else{
        crearLi.innerText = 'Nombre: ' + animal._nombre + '\n' + 'Peso : ' + animal._peso + 'Kg' + '\n' +
                            'Edad: ' + animal._edad + 'años'+'\n' + 'Raza: ' + animal._color;
    }

    txtMostrar.appendChild(crearLi);

    
        

        
    }
}