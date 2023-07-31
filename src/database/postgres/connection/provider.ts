import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const dataProvider = {
  provide: 'POSTGRES_DATABASE_CONNECTION',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('POSTGRES_DB_HOST'),
    port: +configService.get('POSTGRES_DB_PORT'),
    username: configService.get('POSTGRES_DB_USERNAME'),
    password: configService.get('POSTGRES_DB_PASSWORD'),
    database: configService.get('POSTGRES_DB_NAME'),
    entities: [],
    synchronize: true,
  }),
  dataSourceFactory: async (options) => {
    const dataSource = await new DataSource(options).initialize();
    return dataSource;
  },
};
