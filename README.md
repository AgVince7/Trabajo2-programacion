### **FÚTBOL AL INSTANTE ⚽**
---
**Integrantes:**
- Vince, Agustín
- Rocha, Thiago

## Descripción general

**Fútbol Al Instante** es una aplicación para visualizar información de partidos de fútbol en tiempo real, creada con **React** y **Vite**.  
El sistema obtiene datos de partidos en vivo desde APIs externas, muestra los encuentros organizados por liga y actualiza la información automáticamente cada **10 segundos**.  

La aplicación cuenta con un diseño **responsivo**, adaptado para computadoras de escritorio, tablets y dispositivos móviles.  
También incluye un sistema de **cambio de tema** (claro/oscuro) según la preferencia del usuario.

---

## Propósito del sistema

La aplicación tiene un único objetivo principal:

### **Visualizar información de partidos de fútbol en tiempo real**  
Esto incluye partidos en curso y próximos, organizados por liga y actualizados automáticamente.

### Funciones disponibles para el usuario:
- Ver partidos de varias ligas al mismo tiempo (vista **Inicio**).
- Filtrar los partidos seleccionando una liga específica desde la barra lateral.
- Alternar entre **tema claro** y **tema oscuro**.
- Acceder desde cualquier dispositivo gracias a su diseño responsivo.

### Lo que *no* hace el sistema:
- No programa partidos.
- No gestiona usuarios ni autenticación.
- No administra datos internos.  

Es exclusivamente una **interfaz de visualización** que consume y muestra información de fuentes externas.

---

## Dependencias externas

**Nombre API**: Promiedos
**Link API**: https://api.promiedos.com.ar/games/today

La aplicación se integra con tres servicios externos:

1. **API del backend principal (VITE_API_URL):**  
Devuelve JSON que contiene una matriz de objetos de liga, cada uno con una matriz de juegos.  
Encuestado cada 10 segundos por `App.jsx`.  
**Estructura de respuesta:**
```json
{ 
  "leagues": [
    { 
      "id": "value",
      "name": "value",
      "games": [ ... ]
    }
  ] 
}
````

2. **API específica de la liga (VITE_API_LEAGUE_URL):**
   Devuelve datos detallados para una sola liga.
   Accedido por `MainPage.jsx` sobre la selección del usuario en:
   `src/componentes/Página principal.jsx` (líneas 44–56).
   Los puntos finales siguen el patrón:

```
{BASE_URL}/{leagueId}
```

3. **Servicio de imágenes (api.promiedos.com.ar):**
   Proporciona logotipos de equipos y ligas.
   Referenciado directamente en los atributos `src` del componente.
   No se requiere autenticación.

Todos los puntos finales de la API se configuran mediante variables de entorno (**archivo .env**) y se accede a través de `import.meta.env` en tiempo de ejecución.

---

## 🚀 ¿Cómo usarla?

**Clona este repositorio en tu computadora:**
```bash
git clone https://github.com/AgVince7/Trabajo2-programacion.git
```
Entra en la carpeta del proyecto:

```bash
cd Trabajo2-programacion
```
Instala las dependencias (requiere tener instalado Node.js):

```bash
npm install
```
Inicia la aplicación en modo desarrollo:

```bash
npm run dev
```
Abre tu navegador y visita la dirección que aparece (usualmente http://localhost:3000) para ver la app funcionando.



