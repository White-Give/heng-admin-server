import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/module/main/dto';
import { ResultData } from 'src/utils/result';
import { JwtService } from '@nestjs/jwt';
import { GenerateUUID } from 'src/utils';
import { UserEntity } from 'src/entity/system/user.entity';
import { GetNowDate } from 'src/utils/index';
import { DelFlagEnum } from 'src/common/enum/index';
import { CreateUserDto } from './dto/index';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly userEntityRep: Repository<UserEntity>,
  ) {}

  /**
   * 创建
   * @param createUser
   * @returns
   */
  async createUser(createUser: CreateUserDto) {
    const salt = bcrypt.genSaltSync(10);
    console.log(salt);
    createUser.password = bcrypt.hashSync(createUser.password, salt);
    console.log(createUser);
    return ResultData.ok();
  }

  /**
   * login 用户获取token
   * @param user
   * @param clientInfo
   * @returns
   */
  async userLogin(user: LoginDto, clientInfo: any) {
    const data = await this.userEntityRep.findOne({
      where: { userName: user.username },
      select: ['userId', 'password'],
    });
    if (!(data && bcrypt.compareSync(user.password, data.password))) {
      return ResultData.fail(500, `帐号或密码错误`);
    }

    await this.userEntityRep.update(
      { userId: data.userId },
      { loginDate: GetNowDate(), loginIp: clientInfo.ipaddr },
    );

    const token = this.createToken({
      userId: GenerateUUID(),
      username: user.username,
    });
    console.log(clientInfo);
    return ResultData.ok({ token }, '登录成功');
  }

  /**
   * 获取用户信息
   * @param userId
   * @returns
   */
  async getUserInfo(userId: string) {
    const entity = this.userEntityRep.createQueryBuilder('user');
    entity.where({ userId: userId, delFlag: DelFlagEnum.NORMAL });
    const data: any = await entity.getOne();
    return ResultData.ok(data);
  }

  /**
   * 从数据声明生成令牌
   *
   * @param payload 数据声明
   * @return 令牌
   */
  createToken(payload: { userId: string; username: string }): string {
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }

  /**
   * 从令牌中获取数据声明
   *
   * @param token 令牌
   * @return 数据声明
   */
  parseToken(token: string) {
    try {
      if (!token) return null;
      const payload = this.jwtService.verify(token.replace('Bearer ', ''));
      return payload;
    } catch (error) {
      return error;
    }
  }
}
