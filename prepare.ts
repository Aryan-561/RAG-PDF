import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { db } from "./dbConnect";

export async function indexTheDocument(filePath: string) {

    // Load the PDF file
    const loader = new PDFLoader(filePath, { splitPages: false });
    const docs = await loader.load();

    console.log('Loaded documents:', docs.length);

    // Split the text into chunks
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 100,
    })

    const text = await textSplitter.splitDocuments(docs);
    console.log('Split into chunks:', text.length);

    // Get the collection (it will use NVIDIA embeddings automatically)
    const collection = db.collection("ragpdf");

    // Insert documents - AstraDB will automatically generate embeddings using NVIDIA model
    for (let i = 0; i < text.length; i++) {
        const doc = text[i];
        if (doc && doc.pageContent) {
            await collection.insertOne({
                $vectorize: doc.pageContent, // This triggers automatic embedding generation
                content: doc.pageContent,
                metadata: doc.metadata || {},
                source: filePath,
                chunk_index: i
            });
        }
    }

    console.log(`Successfully indexed ${text.length} document chunks with NVIDIA embeddings!`);
}

