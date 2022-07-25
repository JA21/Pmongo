import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  db_type:process.env.DB_TYPE,
  db_user:process.env.DB_USER,
  db_cluster:process.env.DB_CLUSTER,
}));