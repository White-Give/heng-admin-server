import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AxiosService {
  constructor(private readonly httpService: HttpService) {}
  /**
   * 获取ip地址信息
   * @param ip
   * @returns
   */
  async getIpAddress(ip: string) {
    try {
      const IP_URL = 'https://whois.pconline.com.cn/ipJson.jsp';
      const response = await this.httpService.axiosRef(
        `${IP_URL}?ip=${ip}&json=true`,
        {
          responseType: 'arraybuffer',
          transformResponse: [
            function (data) {
              return JSON.parse(data);
            },
          ],
        },
      );
      return response.data.addr;
    } catch (error: any) {
      return error || '未知';
    }
  }
}
