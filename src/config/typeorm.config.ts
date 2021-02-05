import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'nasusop69',
  database: 'taskmanagement',
  autoLoadEntities: true,
  synchronize: true,
};
