import { DataAPIClient } from "@datastax/astra-db-ts";

// Initialize the client
const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db('https://49080ef9-1b8f-43b1-ab53-e5d82a5e0949-us-east-2.apps.astra.datastax.com');

// Export the db instance so it can be used in other files
export { db };

export async function dbConnect(){
    try {
        const colls = await db.listCollections();
        console.log('Connected to AstraDB:', colls); 
        return db;
    } catch (error) {
        console.error('Error connecting to AstraDB:', error);
        throw error;
    }
}

