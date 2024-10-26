import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';
if (!env.VITE_SUPABASE_URL) throw new Error('DATABASE_URL is not set');
const client = postgres(env.VITE_SUPABASE_URL);
export const db = drizzle(client);
