**Casos de Uso de Alto Nivel:**

![Mockup 1](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/1.png)

![Mockup 2](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/2.png)

![Mockup 3](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/3.png)

![Mockup 4](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/4.png)

![Mockup 5](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/5.png)

![Mockup 6](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/6.png)

![Mockup 7](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/7.png)

![Mockup 8](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/8.png)

![Mockup 9](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/9.png)

![Mockup 10](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/10.png)

![Mockup 11](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/11.png)

![Mockup 12](https://github.com/Barahona1602/AYD_P2_G7/blob/feature202110773/dataBase/Mockup%20Huellita%20Feliz/12.png)


**Casos de Uso de Alto Nivel:**

| **Registro de Usuario** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores, Clientes |
| Descripción | Permite a los usuarios registrarse en la plataforma proporcionando información personal necesaria. |

| **Inicio de Sesión** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores, Clientes |
| Descripción | Los usuarios reciben un código por correo electrónico en su primera sesión. Posteriormente, ingresan con su contraseña. |

| **Página Principal Cuidador** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | Muestra el perfil del cuidador después de iniciar sesión, permitiéndole editar la información personal. |

| **Selección de Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | Permite al cuidador visualizar y atender a las mascotas hospedadas en el hotel, con límite de dos mascotas por cuidador. |

| **Atención de Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | Permite al cuidador actualizar el estado de la mascota durante su atención. |

| **Devolución de Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | Muestra la fecha de devolución al seleccionar una mascota, permitiendo al cuidador marcar la devolución y cambiar el estado a "Listo para recoger". |

| **Reseñas** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | Permite a los cuidadores visualizar y eliminar comentarios de los dueños de mascotas. |

| **Tienda** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | Permite a los cuidadores agregar, actualizar, y eliminar productos en la tienda del hotel para que los clientes puedan comprar físicamente. |

| **Página Principal Cliente** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| Descripción | Muestra el perfil del cliente después de iniciar sesión, permitiéndole editar la información personal. |

| **Creación de Perfil** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| Descripción | Permite a los clientes agregar fichas de información para cada mascota, especificando varios detalles. |

| **Hospedar Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| Descripción | Permite a los clientes hospedar sus mascotas, indicando la fecha de regreso y mostrando el estado de las mascotas mientras están hospedadas. |

| **Reseñas** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| Descripción | Permite a los clientes calificar y dejar comentarios sobre el hotel y el trato recibido por sus mascotas, con la opción de eliminar sus propios comentarios. |

| **Recoger Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| Descripción | Habilita la opción para recoger la mascota cuando su estado es "Listo para recoger", mostrando un mensaje de agradecimiento. |

| **Tienda** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| Descripción | Permite a los clientes visualizar productos en la tienda del hotel. |

**Casos de Uso Expandidos:**

| **Registro de Usuario** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores, Clientes |
| Descripción | Permite a los usuarios registrarse en la plataforma proporcionando información personal necesaria. |
| **Flujo:** | |
| --- | --- |
| 1. El usuario accede al formulario de registro. | |
| 2. Completa el formulario con los datos requeridos. | |
| 3. Envía el formulario. | |
| 4. La plataforma verifica la validez de los datos. | |
| 5. Si los datos son válidos, se registra el usuario. Si hay errores, se muestran mensajes de error. | |
| **Flujo alterno:** | |
| --- | --- |
| - Si el correo electrónico ya está registrado, se muestra un mensaje de error indicando la duplicación. | |

| **Inicio de Sesión** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores, Clientes |
| Descripción | Los usuarios reciben un código por correo electrónico en su primera sesión. Posteriormente, ingresan con su contraseña. |
| **Flujo:** | |
| --- | --- |
| 1. El usuario recibe un código por correo electrónico. | |
| 2. Ingresa el código en su primera sesión. | |
| 3. En sesiones posteriores, ingresa con su contraseña. | |
| 4. En la primera sesión, muestra un mensaje de error si entra con la contraseña y no con el código. | |
| 5. Muestra mensaje de error si el código es incorrecto. | |
| **Flujo alterno:** | |
| --- | --- |
| - Si el usuario intenta iniciar sesión con un código incorrecto, se muestra un mensaje de error. | |

| **Página Principal Cuidador** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | Muestra el perfil del cuidador después de iniciar sesión, permitiéndole editar la información personal. |
| **Flujo:** | |
| --- | --- |
| 1. El cuidador inicia sesión y accede a su página principal. | |
| 2. Visualiza y edita la información de su perfil. | |
| 3. Guarda los cambios si es necesario. | |
| **Flujo alterno:** | |
| --- | --- |
| - Si el cuidador intenta editar con datos inválidos, se muestra un mensaje de error. | |

| **Selección de Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | Permite al cuidador visualizar y atender a las mascotas hospedadas en el hotel, con límite de dos mascotas por cuidador. |
| **Flujo:** | |
| --- | --- |
| 1. El cuidador elige una mascota para atender. | |
| 2. Si ya tiene 2 mascotas a su cargo, muestra un mensaje de error al intentar atender una tercera o deshabilita la opción. | |
| **Flujo alterno:** | |
| --- | --- |
| - Si el cuidador intenta atender a una tercera mascota, muestra un mensaje de error. | |

| **Atención de Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | El cuidador observa y atiende a las mascotas, actualizando su estado (comiendo, paseando, bañado, tomando la siesta, jugando). |
| **Flujo:** | |
| --- | --- |
| 1. El cuidador observa y atiende a las mascotas, actualizando su estado (comiendo, paseando, bañado, tomando la siesta, jugando).. | |

| **Devolución de Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| Descripción | El cuidador elige una mascota para atender. Muestra la fecha de devolución. Hasta la fecha límite, muestra la opción de devolución para cambiar el estado a "Listo para recoger". |
| **Flujo:** | |
| --- | --- |
| 1. El cuidador elige una mascota para atender.| |
| 2. Muestra la fecha de devolución..| |
| 3. Hasta la fecha límite, muestra la opción de devolución para cambiar el estado a "Listo para recoger".| |
| **Flujo alterno:** | |
| --- | --- |
| - Si el cuidador intenta devolver una mascota después de la fecha límite, muestra un mensaje de advertencia. | |

| **Reseñas** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| **Flujo:** | |
| Descripción | El cuidador visualiza y elimina comentarios de los dueños de mascotas. |

| **Tienda** | |
| --- | --- |
| Tipo | Primario |
| Roles | Cuidadores |
| **Flujo:** | |
| Descripción | El cuidador agrega, actualiza y elimina productos en la tienda del hotel. |

| **Página Principal Cliente** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| Descripción | El cliente inicia sesión y accede a su página principal. Visualiza y edita la información de su perfil. Guarda los cambios si es necesario. |
| **Flujo:** | |
| --- | --- |
| 1. El cliente inicia sesión y accede a su página principal..| |
| 2. Visualiza y edita la información de su perfil..| |
| 3. Guarda los cambios si es necesario..| |
| **Flujo alterno:** | |
| --- | --- |
| - Si el cliente intenta editar con datos inválidos, se muestra un mensaje de error. | |

| **Creación de Perfil** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| **Flujo:** | |
| 1 | El cliente agrega fichas de información para cada mascota, completando los campos requeridos. |

| **Hospedar Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| Descripción | El cliente elige "Hospedar mascota" desde la lista de perfiles. Ingresa la fecha de regreso. Muestra el estado de las mascotas hospedadas. |
| **Flujo:** | |
| --- | --- |
| 1. El cliente elige "Hospedar mascota" desde la lista de perfiles..| |
| 2. Ingresa la fecha de regreso..| |
| 3. Muestra el estado de las mascotas hospedadas..| |
| **Flujo alterno:** | |
| --- | --- |
| - Deshabilita la ficha o indica que está hospedada. | |

| **Reseñas** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| **Flujo:** | |
| 1 | El cliente califica y deja comentarios sobre el hotel y el trato recibido por sus mascotas. Elimina sus propios comentarios. |

| **Recoger Mascota** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| **Flujo:** | |
| 1 | Habilita la opción de recoger la mascota cuando su estado es "Listo para recoger". Muestra un mensaje de agradecimiento al recogerla. |

| **Tienda** | |
| --- | --- |
| Tipo | Primario |
| Roles | Clientes |
| **Flujo:** | |
| 1 | Permite a los clientes visualizar productos en la tienda del hotel. |
