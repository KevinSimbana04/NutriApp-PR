// src/server.js

// Requerir módulos (usando ES Modules)
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mealRoutes from './routers/mealRoutes.js'; // Asegúrate que la ruta es correcta y tiene la extensión .js

// Inicializaciones
const app = express();
dotenv.config(); // Carga las variables de entorno

// Configuraciones (tu configuración existente)
// app.set('port', process.env.PORT || 3000); // Esto ya lo haces con app.get('port') más abajo.

// Middlewares
app.use(express.json()); // Permite a Express leer JSON en el cuerpo de las solicitudes
app.use(cors()); // Habilita CORS para permitir solicitudes desde otros dominios

// Variables globales
app.set('port', process.env.PORT || 3000); // Define el puerto del servidor

// Monta las rutas de comidas bajo el prefijo /api/meals
app.use('/api/meals', mealRoutes); // ¡Aquí usamos el mealRoutes importado!

// Ruta raíz para verificar que el servidor está funcionando
// Mantenemos la ruta más informativa, eliminando la duplicada.
app.get('/', (req, res) => {
    res.send('Servidor de Recetas TheMealDB funcionando. Prueba /api/meals/random o /api/meals/search?name=chicken');
});

// Exportar la instancia de express por medio de app
export default app;