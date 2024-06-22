import type { Config } from "drizzle-kit"
import { env } from "./src/env"

export default {
   schema: "./src/schema/**/*.ts",
   dialect: "postgresql",
   dbCredentials: { url: env.DATABASE_URL },
   tablesFilter: ["acme_*"],
} satisfies Config
