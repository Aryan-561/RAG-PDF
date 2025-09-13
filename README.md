# RAG PDF Chat Bot 🤖📄

A simple chatbot that lets you ask questions about your PDF documents using AI.

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

## How to use

1. The app will process your PDF
2. Start asking questions about your document
3. Type `exit` to quit

## Example

```
You: What is this document about?
AI: This document discusses...

You: exit
👋 Goodbye!
```

## Tech Stack

- **Bun** - JavaScript runtime
- **AstraDB** - Vector database 
- **Groq** - AI model
- **LangChain** - PDF processing

This project was created using `bun init` in bun v1.2.19. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.