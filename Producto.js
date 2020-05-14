class Producto {
  static cont = 0;
  constructor(nombre, descripcion, cantidad, costo) {
    this.id = ++Producto.cont;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.costo = costo;
  }
  showTextInfo() {
    return "id: " + this.id + "Nombre: " + this.nombre;
  }
  get valorMercancia() {
    return this.costo * this.cantidad;
  }
  showInfo() {
    return {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      cantidad: this.cantidad,
      costo: this.costo
    };
  }
}
