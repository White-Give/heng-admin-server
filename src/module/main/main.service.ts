import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/index';
import { SUCCESS_CODE } from 'src/utils/result';
import { AxiosService } from 'src/module/axios/axios.service';
import { UserService } from '../system/user/user.service';
import { LogsService } from '../monitor/mainlog/logs.service';

@Injectable()
export class MainService {
  constructor(
    private readonly userService: UserService,
    private readonly axiosService: AxiosService,
    private readonly logsService: LogsService,
  ) {}
  /**
   * login
   * @param user
   * @param clientInfo
   * @returns
   */
  async login(user: LoginDto, clientInfo: any) {
    const loginInfo = {
      username: user.username,
      status: '0',
      msg: '',
      loginLocation: '',
    };
    try {
      const loginLocation = await this.axiosService.getIpAddress(
        clientInfo.ipaddr,
      );
      loginInfo.loginLocation = loginLocation;
    } catch (error) {
      console.log(error);
    }
    const loginRes = await this.userService.userLogin(user, loginInfo);
    loginInfo.status = loginRes.code === SUCCESS_CODE ? '0' : '1';
    loginInfo.msg = loginRes.msg;
    this.logsService.create({ ...loginInfo, type: 'login' });
    return loginRes;
  }
}
