import { WebSocketServer, WebSocket } from "ws";

let wss;
export function initializeWebSocket(server) {
    wss = new WebSocketServer({ server });
    console.log("WebSocket Server initialized");

    wss.on('connection', (ws) => {
        console.log("Client connected");

        ws.on("message", (message) => {
            ws.send(`Server received: ${message}`);
        });

        ws.on("close", () => {
            console.log("Client disconnected");
        });

        ws.on("error", (error) => {
            console.error("WebSocket error:", error);
        });
    });
}

export function broadcastWebSocketMessage(payload) {
    if (!wss) return;

    const message = typeof payload === "string" ? payload : JSON.stringify(payload);
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}

export function getWebSocketServer() {
    return wss;
}