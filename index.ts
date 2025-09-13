import { chat } from "./chat";
import { db ,dbConnect } from "./dbConnect";
import { indexTheDocument } from "./prepare";
import * as dotenv from 'dotenv';

dotenv.config({
    path: '.env'
})

export const collection = db.collection("ragpdf");



dbConnect()

async function main(){
    try {
        await dbConnect()
        const filePath = './test.pdf'; //add your pdf file path here
        await indexTheDocument(filePath) // index the document only once
        console.log('\n')
        await chat()
        
    } catch (error) {
        console.error('Error in main:', error);
    }
}

main()