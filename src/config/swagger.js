import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import { fileURLToPath } from 'url';

// Necesario para construir rutas absolutas compatibles con Render
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Productos Gamer',
      version: '1.0.0',
      description:
        'API REST para gestión de usuarios y productos de computación. Desarrollada con Node.js, Express, MySQL y Supabase Auth.',
    },

    // 🔥 IMPORTANTE: NO USAR localhost ni 127.0.0.1 en Render
    servers: [
      {
        url: '/', 
        description: 'Servidor desplegado (Render)'
      }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },

  // 🔥 Usamos rutas absolutas que funcionan tanto local como en Render
  apis: [
    path.join(__dirname, '../router/*.js'),
    path.join(__dirname, '../server.js')
  ]
};

export const swaggerSpec = swaggerJsdoc(options);
