import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';

@Module({
  imports: [HttpModule],
  controllers: [HospitalController],
  providers: [HospitalService],
})
export class HospitalModule {}
