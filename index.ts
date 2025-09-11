import { dbConnect } from "./dbConnect";
import { indexTheDocument } from "./prepare";
import * as dotenv from 'dotenv';

dotenv.config({
    path: '.env'
})



const filePath = './test.pdf'; //add your pdf file path here
indexTheDocument(filePath)

dbConnect()