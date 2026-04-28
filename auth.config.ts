// Fixed: Aligned with auth.ts - using unified config from auth.ts
// Delete this file or keep as minimal if proxy needed later
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [GitHub, Google],
} satisfies NextAuthConfig;
