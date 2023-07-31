import { Module } from '@nestjs/common';
import { dataProvider } from './provider';

@Module({
  providers: [dataProvider],
  exports: [dataProvider],
})
export class PostgresConnectionModule {}
