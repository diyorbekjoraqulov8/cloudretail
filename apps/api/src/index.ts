import pdMigrate from 'node-pg-migrate';
import { DATABASE_URL, MIGRATIONS_DIR, MIGRATIONS_TABLE } from './constants';

(async () => {
  await pdMigrate({
    databaseUrl: DATABASE_URL,
    dir: MIGRATIONS_DIR,
    direction: 'up',
    migrationsTable: MIGRATIONS_TABLE,
  });
})().catch(console.error);
