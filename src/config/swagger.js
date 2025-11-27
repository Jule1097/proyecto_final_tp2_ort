import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

// Crear __filename y __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Productos Gamer",
      version: "1.0.0",
      description:
        "API REST para gestión de usuarios y productos. Node.js, Express, MySQL y Supabase.",
    },

    // Render NO permite localhost acá
    servers: [
      {
        url: "/",
        description: "Servidor desplegado en Render",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  // Rutas absolutas → necesarias en Render
  apis: [
    path.join(__dirname, "../router/*.js"),
    path.join(__dirname, "../server.js"),
  ],
};

export const swaggerSpec = swaggerJsdoc(options);
