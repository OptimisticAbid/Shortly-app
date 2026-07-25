import 'dotenv/config';
import app from './app.js';
import { connectDb } from './db/index.js'
import http from "http"
import { initializeWebSocket } from './socket/websocket.js';

const PORT = process.env.PORT || 8000

async function startServer() {
    
    try {
        await connectDb()
        const server = http.createServer(app)
        // app.listen()

        initializeWebSocket(server)
        
        server.listen(PORT , () => {
            console.log(`Server running on port ${PORT}`);
        })
    }
    catch (error) {
        console.error("Failed to start server", error);
        process.exit(1);
    }
}
startServer()


