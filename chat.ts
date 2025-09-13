import { ChatGroq } from "@langchain/groq";
import readline from 'node:readline/promises';
import { collection } from ".";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
const llm = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  temperature: 0,
  maxTokens: undefined,
  maxRetries: 2,
  // other params...
});



export async function chat(){
    
    const r1 = readline.createInterface({input: process.stdin, output: process.stdout});

    while(true){
        const question:string = await r1.question(`\nYou: `);
            if (question.toLowerCase() === 'exit') {
            console.log("👋 Exiting...");
            r1.close();
            break;
        }    

        const relevantChunks =  await collection.find({},{
            sort:{
                $vectorize: question
            },
            limit: 2,
            includeSimilarity: true
        }).toArray()

        // console.log(relevantChunks)

        // console.log(`\nRetrieved ${relevantChunks.length} similar documents from AstraDB:`);

        const context = relevantChunks.map(chunk=>chunk.content).join('\n\n')
        const SYSTEM_PROMPT = `You are a helpful assistance`

        const useQuery = `Question: ${question}
        Relevant Context: ${context}
        `
        // console.log(context)

        const aiMsg = await llm.invoke([
            new SystemMessage(SYSTEM_PROMPT),
            new HumanMessage(question),
            new HumanMessage(useQuery)
        ])

        console.log(`AI: ${aiMsg.content}`)

    }

    r1.close();

}