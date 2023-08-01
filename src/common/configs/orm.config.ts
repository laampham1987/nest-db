/* istanbul ignore file */
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

console.log('XXXXXXXXXXXXXXXXXXX:', process.env['POSTGRES_DB_HOST']);
export default new DataSource({
  type: 'postgres',
  host: '172.23.112.1',
  port: 5432,
  username: 'admin',
  password: 'abc123',
  database: process.env['POSTGRES_DB_NAME'] ?? 'appdb',
  entities: ['src/modules/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
});
