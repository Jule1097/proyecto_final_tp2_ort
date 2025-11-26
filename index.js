import config from "./src/config/config.js";
import { sequelize } from "./src/database/mysql.cnx.js";
import supabaseCnx from "./src/database/supabase.cnx.js";
import server from "./src/server.js";

const runServer = async () => {
  try {
    await sequelize.authenticate();
    supabaseCnx.connect();
    console.log("Conexión a MySQL OK");
  } catch (error) {
    console.log("⚠ No se pudo conectar a MySQL:", error.message);
  }

  const PORT = process.env.PORT || 3000;
  
  server.listen(PORT, () => {
    console.log(Servidor corriendo en el puerto ${PORT});
  });
};

runServer();
