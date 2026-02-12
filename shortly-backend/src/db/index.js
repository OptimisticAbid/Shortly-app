import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
  max: 10
  
});
export const db = drizzle({ client: pool });

export const connectDb = async() => {
  
    await pool.query("SELECT 1");
    console.log("Database connected!!") 
  
}


