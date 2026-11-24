# Mercado Pago Demo

Proyecto desarrollado para la actividad recuperativa
de Desarrollo Web y Móvil.

## Objetivo

Implementar una integración básica con Mercado Pago
Checkout Pro mediante una compra simulada.

## Tecnologías

- React
- Vite
- Deno
- TypeScript
- Oak
- Mercado Pago REST API

## Funcionalidades

- Visualización de un producto.
- Creación de una preferencia de pago.
- Redirección a Mercado Pago.
- Visualización del resultado del pago.
- Manejo de errores.

## Backend

Crear el archivo backend/.env utilizando
backend/.env.example como referencia.

Ejecutar desde backend:

    deno task dev

## Frontend

Ejecutar desde frontend:

    deno install
    deno task dev

## Acceso público para el retorno

Crear un túnel HTTPS hacia el puerto 5173.
Configurar su URL en FRONTEND_URL del backend.

## Seguridad

El proyecto utiliza exclusivamente credenciales
y cuentas de prueba de Mercado Pago.

Las credenciales privadas se almacenan en el backend
y no se incluyen en el repositorio.

El resultado mostrado corresponde al retorno del
checkout y no constituye una verificación de pago
apta para producción.