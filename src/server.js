import 'dotenv/config';
import app from './app';

const PORT = process.env.PORT || 8000

async function startServer() {
    
    try {
        await connectDb()
        app.listen(PORT , () => {
            console.log(`Server running on port ${PORT}`);
        })
    }
    catch (error) {
        console.error("Failed to start server", error);
        process.exit(1);
    }
}
startServer()


