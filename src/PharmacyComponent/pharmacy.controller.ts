import { Controller, Get, Query } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';

@Controller('/pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get('/')
  async getHospital(
    @Query('trial') trial: string,
    @Query('city') city: string,
  ) {
    return this.pharmacyService.getNearPharmacy(trial, city);
  }
}
