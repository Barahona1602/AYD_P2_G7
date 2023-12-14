-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS huellitafeliz;

-- Seleccionar la base de datos
USE huellitafeliz;

-- Crear la tabla usuario
CREATE TABLE IF NOT EXISTS usuario (
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

-- Crear la tabla mascota
CREATE TABLE IF NOT EXISTS mascota (
    id_mascota INT AUTO_INCREMENT PRIMARY KEY,
    nombre_mascota VARCHAR(150),
    edad INT,
    especie VARCHAR(150),
    raza VARCHAR(150),
    comportamiento VARCHAR(150),
    contacto_vet BIGINT,
    comentario TEXT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);

-- Crear la tabla atencion_mascota
CREATE TABLE IF NOT EXISTS atencion_mascota (
    id_atencion INT AUTO_INCREMENT PRIMARY KEY,
    fecha_atencion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('Comiendo', 'Paseando', 'Bañado', 'Tomando la siesta', 'Jugando'),
    fecha_devolucion DATE,
    id_usuario INT,
    id_mascota INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_mascota) REFERENCES mascota(id_mascota) ON DELETE CASCADE
);

-- Crear la tabla resenas_hotel
CREATE TABLE IF NOT EXISTS resenas_hotel (
    id_resena_hotel INT AUTO_INCREMENT PRIMARY KEY,
    resena TEXT,
    calificacion INT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);

-- Crear la tabla resena_atencion
CREATE TABLE IF NOT EXISTS resena_atencion (
    id_resena INT AUTO_INCREMENT PRIMARY KEY,
    resena TEXT,
    calificacion INT,
    id_atencion INT,
    FOREIGN KEY (id_atencion) REFERENCES atencion_mascota(id_atencion) ON DELETE CASCADE
);

-- Crear la tabla producto
CREATE TABLE IF NOT EXISTS producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    precio INT,
    descripcion TEXT,
    cantidad INT,
    imagen VARCHAR(255)
);
