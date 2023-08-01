import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PostgresConnectionModule } from 'src/database/postgres';
import { SongsModule } from 'src/modules/song';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PostgresConnectionModule,
    SongsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
