# Aplicación de Registro de Compra y Cálculo de Pago

## Descripción del proyecto

Aplicación móvil desarrollada con Ionic y Angular que permite registrar compras de productos y calcular el pago correspondiente. El sistema facilita el ingreso de información del producto, el cálculo del subtotal, la aplicación de descuentos y la determinación del cambio o saldo pendiente según el dinero recibido.

## Objetivo

Desarrollar una aplicación móvil que permita registrar los datos de una compra y calcular automáticamente el valor que debe pagar el cliente, considerando la cantidad de productos, el precio unitario, los descuentos y el dinero recibido.

## Funcionalidades

### 1. Pestaña Compra

- Ingresar el nombre del producto.
- Registrar la cantidad de unidades.
- Ingresar el precio unitario.
- Validar que los datos ingresados sean correctos.
- Calcular automáticamente el subtotal de la compra.
- Enviar la información registrada a la pestaña de pago.

### 2. Pestaña Pago

- Consultar la información de la compra registrada.
- Visualizar el subtotal.
- Ingresar un porcentaje de descuento.
- Calcular el descuento aplicado y el total final.
- Registrar el dinero recibido del cliente.
- Calcular el cambio que debe entregarse o el saldo pendiente.
- Mostrar mensajes de validación cuando los valores ingresados no sean válidos.
- Iniciar una nueva compra.

## Tecnologías utilizadas

- **Ionic Framework:** desarrollo de la interfaz de la aplicación móvil.
- **Angular:** estructura y lógica de la aplicación.
- **TypeScript:** programación de la lógica del sistema.
- **HTML:** estructura de las vistas.
- **SCSS:** estilos de la interfaz.
- **Capacitor:** integración con plataformas nativas Android.
- **Git y GitHub:** control de versiones y almacenamiento del código fuente.

## Requisitos previos

Para ejecutar el proyecto se necesita tener instalado:

- Node.js y npm.
- Ionic CLI.
- Android Studio y Android SDK, si se desea compilar para Android.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/MaCaReNo26/Deber2-DispostivosMoviles.git
   ```

2. Ingresar a la carpeta del proyecto:

   ```bash
   cd deber2-app
   ```

   Si la carpeta creada al clonar el repositorio tiene otro nombre, ingresar a esa carpeta.

3. Instalar las dependencias:

   ```bash
   npm install
   ```

## Ejecución del proyecto

Para iniciar la aplicación en el navegador:

```bash
ionic serve
```

Para compilar la aplicación:

```bash
ionic build
```

## Compilación para Android

Si Android todavía no está agregado al proyecto, ejecutar:

```bash
ionic capacitor add android
```

Para sincronizar los cambios con Android:

```bash
ionic capacitor sync android
```

Para abrir el proyecto en Android Studio:

```bash
ionic capacitor open android
```

Desde Android Studio se puede generar un APK de depuración mediante la opción **Build → Build APK(s)**.

## Autor

**Alex Suarez**

Proyecto académico de la asignatura de Dispositivos Móviles.

**Evidencias**

<img width="720" height="419" alt="image" src="https://github.com/user-attachments/assets/1da072d2-f0dc-469a-a0fc-407b756d06aa" />

<img width="720" height="1576" alt="image" src="https://github.com/user-attachments/assets/f0c8bac8-3113-464a-b327-68938dcecf26" />

<img width="720" height="1576" alt="image" src="https://github.com/user-attachments/assets/61ce1ba9-54a4-43bc-bcbb-182ed8f00807" />

<img width="720" height="1576" alt="image" src="https://github.com/user-attachments/assets/8f8a4b5a-92ea-4c63-8b31-8a2a7f7302ce" />

<img width="720" height="1576" alt="image" src="https://github.com/user-attachments/assets/4d3bee21-9da9-4897-8f64-c2172b855c48" />

## Repositorio

[Deber2-DispostivosMoviles en GitHub](https://github.com/MaCaReNo26/Deber2-DispostivosMoviles)
