-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS huellitafeliz;

-- Seleccionar la base de datos
USE huellitafeliz;

-- Crear la tabla USUARIOS
CREATE TABLE IF NOT EXISTS USUARIOS (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    apellido VARCHAR(150),
    telefono BIGINT,
    correo VARCHAR(150),
    password VARCHAR(150),
    temp_pass VARCHAR(150),
    fecha_nac DATE,
    rol ENUM('Trabajador', 'Cliente'),
    verificado BOOLEAN DEFAULT FALSE
);

-- Crear la tabla MASCOTAS
CREATE TABLE IF NOT EXISTS MASCOTAS (
    id_mascota INT AUTO_INCREMENT PRIMARY KEY,
    nombre_mascota VARCHAR(150),
    edad INT,
    especie VARCHAR(150),
    raza VARCHAR(150),
    comportamiento VARCHAR(150),
    contacto_vet BIGINT,
    comentario TEXT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES USUARIOS(id_usuario) ON DELETE CASCADE
);

-- Crear la tabla ATENCION_MASCOTA
CREATE TABLE IF NOT EXISTS ATENCION_MASCOTAS (
    id_atencion INT AUTO_INCREMENT PRIMARY KEY,
    fecha_atencion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('Comiendo', 'Paseando', 'Bañado', 'Tomando la siesta', 'Jugando'),
    fecha_devolucion DATE,
    id_usuario INT,
    id_mascota INT,
    FOREIGN KEY (id_usuario) REFERENCES USUARIOS(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_mascota) REFERENCES MASCOTAS(id_mascota) ON DELETE CASCADE
);

-- Crear la tabla resenas_hotel
CREATE TABLE IF NOT EXISTS RESENAS_HOTEL (
    id_resena_hotel INT AUTO_INCREMENT PRIMARY KEY,
    resena TEXT,
    calificacion INT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES USUARIOS(id_usuario) ON DELETE CASCADE
);

-- Crear la tabla resena_atencion
CREATE TABLE IF NOT EXISTS RESENAS_ATENCION (
    id_resena INT AUTO_INCREMENT PRIMARY KEY,
    resena TEXT,
    calificacion INT,
    id_atencion INT,
    FOREIGN KEY (id_atencion) REFERENCES ATENCION_MASCOTAS(id_atencion) ON DELETE CASCADE
);

-- Crear la tabla producto
CREATE TABLE IF NOT EXISTS PRODUCTOS (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    precio INT,
    descripcion TEXT,
    cantidad INT,
    imagen VARCHAR(255)
);

/*
-- Inserción de un usuario
INSERT INTO USUARIOS (nombre, apellido, telefono, correo, password, fecha_nac, rol, verificado)
VALUES ('Pablo', 'Bara', 12345678, 'pablo@gmail.com', 'Pablo.123', '1990-01-01', 'Cliente', TRUE);

-- Inserción de una mascota
INSERT INTO MASCOTAS (nombre_mascota, edad, especie, raza, comportamiento, contacto_vet, comentario, id_usuario)
VALUES ('Firulais', 3, 'Perro', 'Labrador', 'Juguetón', 87654321, 'Mascota muy activa', 1);

-- Inserción de una atención a mascota
INSERT INTO ATENCION_MASCOTAS (estado, id_usuario, id_mascota, fecha_devolucion)
VALUES ('Comiendo', 1, 1, '2023-12-16');

-- Inserción de una reseña de hotel
INSERT INTO RESENAS_HOTEL (resena, calificacion, id_usuario)
VALUES ('Excelente servicio, muy limpio y organizado.', 5, 1);

-- Inserción de una reseña de atención a mascota
INSERT INTO RESENAS_ATENCION (resena, calificacion, id_atencion)
VALUES ('Mi mascota recibió un excelente cuidado, estoy muy satisfecho.', 4, 1);

-- Inserción de un producto
INSERT INTO PRODUCTOS (nombre, precio, descripcion, cantidad, imagen)
VALUES ('Juguete para mascotas', 15, 'Juguete interactivo para perros', 20, 'imagen_juguete.jpg');
*/
