//alert(`Hola bb web`);

class Celular {
    constructor(color, precio, resolucion, camara, ram)
    {
        this.color = color;
        this.precio = precio;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram =ram;
        }

    verInformacion()
    {
        let descripcion = 
        `*********************************************************  <br>
        Este Celular de color ${this.color}, <br> 
                cuenta con una pantalla de ${this.resolucion} de resolucion, <br>
        ${this.ram} de memoria Ram y camara de ${this.camara}. <br>
        Su costo es de <b>$${this.precio}</b>. <br>
        ********************************************************* `;
        document.write(descripcion);
    }    
    
}

document.write( "Estos son los celulares que vendemos");

const celular1 = new Celular("AZUL", 100, "10X10", "12 MP", "32 GB");
celular1.verInformacion();


