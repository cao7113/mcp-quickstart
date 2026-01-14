import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config(); // load environment variables from .env

const ANTHROPIC_MODEL = "claude-sonnet-4-5";
// const ANTHROPIC_MODEL = "claude-3-5-sonnet-2024062";
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const client = new Anthropic({
  apiKey: ANTHROPIC_API_KEY,
});

// console.log(client.apiKey);

async function main() {
  const result = await client.messages.create({
    messages: [
      {
        role: "user",
        content: "Hey Claude!?",
      },
    ],
    model: ANTHROPIC_MODEL,
    max_tokens: 1024,
  });
  console.dir(result);
}

main();
