import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Missing environment variable: MONGODB_URI");
}

if (!process.env.DB_NAME) {
  throw new Error("Missing environment variable: DB_NAME");
}

const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db(process.env.DB_NAME as string);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
      },
    },
  },
  
});
