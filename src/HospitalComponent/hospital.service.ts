import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HospitalService {
  constructor(private readonly httpService: HttpService) {}

  async getNearHospital(trial: string, city: string) {
    const result = [];
    const url = `http://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire?ServiceKey=${
      process.env.API_KEY
    }&Q0=${encodeURI(trial)}&Q1=${encodeURI(
      city,
    )}&QZ=B&ORD=NAME&pageNo=1&numOfRows=1000000`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    data.response.body.items.item.forEach((e) => {
      result.push({
        address: e.dutyAddr,
        id: e.hpid,
        name: e.dutyName,
        tel: e.dutyTel1,
        post: e.postCdn1 + e.postCdn2,
        coord: [+e.wgs84Lat, +e.wgs84Lon],
      });
    });
    return result;
  }
}
