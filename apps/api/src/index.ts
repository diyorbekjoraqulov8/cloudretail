import pdMigrate from 'node-pg-migrate';
import { DATABASE_URL, MIGRATIONS_DIR, MIGRATIONS_TABLE } from './constants';
import { seed } from './seed';
import { pool } from './pool';

(async () => {
  await pdMigrate({
    databaseUrl: DATABASE_URL,
    dir: MIGRATIONS_DIR,
    direction: 'up',
    migrationsTable: MIGRATIONS_TABLE,
  });
  await seed(pool);
})().catch(console.error);
