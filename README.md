# RAG PDF Chat Bot 🤖📄

A simple CLI chatbot that lets you ask questions about your PDF documents using AI.

## What it does

- Upload a PDF document
- Ask questions about the content
- Get AI-powered answers based on your document

## Setup

### 1. Install dependencies
```bash
bun install
```

### 2. Create `.env` file
```env
ASTRA_DB_APPLICATION_TOKEN=your_astra_token
GROQ_API_KEY=your_groq_key
```

### 3. Add your PDF
Place your PDF file in the project folder and name it `test.pdf`

## Run the app

```bash
bun run index.ts
```

## CLI Features

The chatbot runs entirely in your terminal with:

- **Interactive prompt**: Ask questions directly in the command line
- **Real-time responses**: Get instant AI-generated answers
- **Document search**: Automatically finds relevant content from your PDF
- **Simple commands**: Just type your question and press Enter
- **Easy exit**: Type `exit` to quit anytime

## How to use

1. Run the command above
2. Wait for your PDF to be processed
3. See the prompt: `🧑 You: `
4. Type your question and press Enter
5. Get AI response based on your document
6. Continue asking questions or type `exit` to quit

## CLI Example

```bash
$ bun run index.ts

📄 Indexing document...
✅ Document indexed successfully!
🚀 Starting chat interface...

🤖 RAG Chat Bot Started!
Ask questions about your PDF document. Type 'exit' to quit.

🧑 You: What is this document about?
🔍 Searching for relevant information...
🤖 Generating response...

🤖 Bot: This document discusses...

📚 Sources: Found 3 relevant document chunks

🧑 You: Can you summarize the main points?
🔍 Searching for relevant information...
🤖 Generating response...

🤖 Bot: The main points are...

🧑 You: exit
👋 Goodbye!
```

## Tech Stack

- **Bun** - JavaScript runtime
- **AstraDB** - Vector database 
- **Groq** - AI model
- **LangChain** - PDF processing

This project was created using `bun init` in bun v1.2.19. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.