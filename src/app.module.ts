import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
import { UserModule } from './UserComponent/user.module';
import { HospitalModule } from './HospitalComponent/hospital.module';
import { PharmacyModule } from './PharmacyComponent/pharmacy.module';
import { ChatModule } from './ChatComponent/chat.module';
import { MessageModule } from './MessageComponent/message.module';
import { AuthModule } from './AuthComponent/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    HospitalModule,
    PharmacyModule,
    ChatModule,
    MessageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
