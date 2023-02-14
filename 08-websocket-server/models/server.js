const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

// const { dbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);

    this.paths = {
      //   auth: '/api/auth',
      //   buscar: '/api/buscar',
      //   categorias: '/api/categorias',
      //   productos: '/api/productos',
      //   usuarios: '/api/usuarios',
      //   uploads: '/api/uploads',
    };

    // Conectar a base de datos
    //this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();

    //Sockets
    this.sockets();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    //this.app.use(express.json());

    // Directorio Público
    this.app.use(express.static('public'));
  }

  routes() {
    //this.app.use(this.paths.auth, require('../routes/auth'));
  }

  sockets() {
    this.io.on('connection', socketController);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }
}

module.exports = Server;
