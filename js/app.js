"use strict";
// console.log("Hola Mundo")
// class Book {
//     constructor(public title: string, public author: string, public publicationYear: number) {}
// }
// class Library {
//     private books: Book[] = [];
//     // Método para agregar un libro a la colección
//     addBook(book: Book) {
//         this.books.push(book);
//     }
//     // Método para listar todos los libros en la biblioteca
//     listBooks() {
//         if (this.books.length === 0) {
//             console.log("La biblioteca está vacía.");
//         } else {
//             console.log("Libros en la biblioteca:");
//             this.books.forEach((book, index) => {
//                 console.log(`[${index + 1}] Título: ${book.title}, Autor: ${book.author}, Año de publicación: ${book.publicationYear}`);
//             });
//         }
//     }
//     // Método para buscar libros por autor
//     searchByAuthor(author: string) {
//         const matchingBooks = this.books.filter(book => book.author === author);
//         if (matchingBooks.length === 0) {
//             console.log(`No se encontraron libros del autor ${author}.`);
//         } else {
//             console.log(`Libros de ${author}:`);
//             matchingBooks.forEach((book, index) => {
//                 console.log(`[${index + 1}] Título: ${book.title}, Año de publicación: ${book.publicationYear}`);
//             });
//         }
//     }
// }
// // Crear una instancia de la biblioteca
// const myLibrary = new Library();
// // Agregar algunos libros
// myLibrary.addBook(new Book("El Gran Gatsby", "F. Scott Fitzgerald", 1925));
// myLibrary.addBook(new Book("Cien años de soledad", "Gabriel García Márquez", 1967));
// myLibrary.addBook(new Book("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997));
// // Listar los libros en la biblioteca
// myLibrary.listBooks();
// // Buscar libros por autor
// myLibrary.searchByAuthor("Gabriel García Márquez");
// class Usuario {
//     idUsuario: number;
//     nombre: string;
//     correoElectronico: string;
//     contraseña: string;
//     dirección: string;
//     métodoDePago: string;
//     carritos: CarritoDeCompras[] = [];
//     ordenesDeCompra: OrdenDeCompra[] = [];
//     constructor(
//       idUsuario: number,
//       nombre: string,
//       correoElectronico: string,
//       contraseña: string,
//       dirección: string,
//       métodoDePago: string
//     ) {
//       this.idUsuario = idUsuario;
//       this.nombre = nombre;
//       this.correoElectronico = correoElectronico;
//       this.contraseña = contraseña;
//       this.dirección = dirección;
//       this.métodoDePago = métodoDePago;
//     }
//     agregarAlCarrito(producto: Producto, cantidad: number) {
//       const carrito = this.carritos.find((c) => !c.finalizado);
//       if (carrito) {
//         carrito.agregarProducto(producto, cantidad);
//       } else {
//         const nuevoCarrito = new CarritoDeCompras(this);
//         nuevoCarrito.agregarProducto(producto, cantidad);
//         this.carritos.push(nuevoCarrito);
//       }
//       console.log("                                                          ")
//       console.log("--------- PRODUCTOS AGREGADOS ------------")
//       console.log(`"${producto.nombre}" x${cantidad} agregado al carrito.`);
//       console.log("                                                          ")
//     }
//     verCarrito() {
//       const carrito = this.carritos.find((c) => !c.finalizado);
//       if (carrito) {
//         carrito.mostrarCarrito();
//       } else {
//         console.log('El carrito está vacío.');
//       }
//     }
//     realizarCompra() {
//       const carrito = this.carritos.find((c) => !c.finalizado);
//       if (carrito) {
//         carrito.finalizarCompra();
//         this.ordenesDeCompra.push(new OrdenDeCompra(this, carrito));
//         console.log('Compra realizada.');
//         console.log("                      ")
//       } else {
//         console.log('El carrito está vacío.');
//       }
//     }
//   }
//   class Producto {
//     idProducto: number;
//     nombre: string;
//     descripción: string;
//     precio: number;
//     stock: number;
//     categoría: Categoría;
//     constructor(
//       idProducto: number,
//       nombre: string,
//       descripción: string,
//       precio: number,
//       stock: number,
//       categoría: Categoría
//     ) {
//       this.idProducto = idProducto;
//       this.nombre = nombre;
//       this.descripción = descripción;
//       this.precio = precio;
//       this.stock = stock;
//       this.categoría = categoría;
//     }
//   }
//   class Categoría {
//     idCategoría: number;
//     nombre: string;
//     constructor(idCategoría: number, nombre: string) {
//       this.idCategoría = idCategoría;
//       this.nombre = nombre;
//     }
//   }
//   class CarritoDeCompras {
//     productos: Map<Producto, number> = new Map();
//     finalizado: boolean = false;
//     constructor(public usuario: Usuario) {}
//     agregarProducto(producto: Producto, cantidad: number) {
//       if (this.finalizado) {
//         console.log('Este carrito ya ha sido finalizado.');
//         return;
//       }
//       if (cantidad <= 0) {
//         console.log('La cantidad debe ser mayor que cero.');
//         return;
//       }
//       if (cantidad > producto.stock) {
//         console.log('No hay suficiente stock.');
//         return;
//       }
//       if (this.productos.has(producto)) {
//         this.productos.set(producto, this.productos.get(producto)! + cantidad);
//       } else {
//         this.productos.set(producto, cantidad);
//       }
//     }
//     mostrarCarrito() {
//       console.log('---------- CARRITO DE COMPRAS: ------------');
//       this.productos.forEach((cantidad, producto) => {
//         console.log(`- ${producto.nombre} x${cantidad}`);
//       });
//     }
//     finalizarCompra() {
//       this.finalizado = true;
//     }
//   }
//   class OrdenDeCompra {
//     constructor(public usuario: Usuario, public carrito: CarritoDeCompras) {}
//   }
//   // Crear usuarios y productos de ejemplo
//   const usuario1 = new Usuario(1, 'Usuario 1', 'usuario1@ejemplo.com', 'password1', 'Dirección 1', 'Tarjeta de Crédito');
//   const usuario2 = new Usuario(2, 'Usuario 2', 'usuario2@ejemplo.com', 'password2', 'Dirección 2', 'PayPal');
//   const categoria1 = new Categoría(1, 'Electrónicos');
//   const categoria2 = new Categoría(2, 'Ropa');
//   const producto1 = new Producto(1, 'Smartphone', 'Un teléfono inteligente de última generación', 499.99, 50, categoria1);
//   const producto2 = new Producto(2, 'Camiseta', 'Una camiseta de algodón de manga corta', 19.99, 100, categoria2);
//   console.log('=== Bienvenido a la Tienda en Línea ===');
//   console.log('----------- USUARIOS CREADOS: -------------');
//   console.log(usuario1);
//   console.log(usuario2);
//   usuario1.agregarAlCarrito(producto1, 2);
//   usuario1.verCarrito();
//   usuario1.realizarCompra();
//   usuario2.agregarAlCarrito(producto2, 3);
//   usuario2.verCarrito();
//   usuario2.realizarCompra();
// class Persona {
//   private nombre: string;
//   private edad: number;
//   constructor(nombre: string, edad: number) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }
//   getNombre(): string {
//     return this.nombre;
//   }
//   setNombre(nombre: string): void {
//     this.nombre = nombre;
//   }
//   getEdad(): number {
//     return this.edad;
//   }
//   setEdad(edad: number): void {
//     this.edad = edad;
//   }
//   saludar(): void {
//     console.log(`Hola mi nombre es ${this.nombre}`);
//   }
// }
// class PersonaSobrecargada extends Persona {
//   constructor(nombre: string, edad?: number) {
//     if (edad) {
//       super(nombre, edad);
//       console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
//     } else {
//       super(nombre, 0);
//       console.log(`Hola mi nombre es ${nombre}.`);
//     }
//   }
// }
// // Ejemplo de uso
// const persona1 = new PersonaSobrecargada('Juan', 30);
// const persona2 = new PersonaSobrecargada('María');
// persona1.saludar();
// persona2.saludar();
// function suma(numero_uno: number, numero_dos: number){
//   return numero_uno+numero_dos;
// }
// const resultado = 
let numero_uno, numero_dos;
numero_uno = 5, numero_dos = 6;
let suma = numero_uno + numero_dos;
console.log(suma);
