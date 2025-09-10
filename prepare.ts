import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";



export async function indexTheDocument(filePath:string) {

    // Load the PDF file
    const loader =  new PDFLoader(filePath, {splitPages: false});
    const docs = await loader.load();

    console.log(docs);

    // Split the text into chunks
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 100,
    })

    const text = await textSplitter.splitDocuments(docs);
    console.log(text);
    console.log(text.length);

}

