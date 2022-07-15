import { Controller, Get, Query } from '@nestjs/common';
import { HospitalService } from './hospital.service';

@Controller('/hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get('/')
  async getHospital(
    @Query('trial') trial: string,
    @Query('city') city: string,
  ) {
    return this.hospitalService.getNearHospital(trial, city);
  }
}
