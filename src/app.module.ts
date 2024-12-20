import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/index';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
// entities字段的作用是根据提供的路径字符串，在运行的时候查找对应路径下的entity文件。

// 首先，我建议最好直接在使用 TypeORM.forRoot 来引入配置，就像下面一样：
// const entitiesPaths = [join(__dirname, '**', '*.entity.{ts,js}')]
// imports: [
//   TypeOrmModule.forRoot({
//           "type": "mysql",
//           "host": "localhost",
//           "port": 3306,
//           "username": "root",
//           "password": "root",
//           "database": "zen-im",
//           "entities": entitiesPaths,
//           "synchronize": true
//       }
//   )],
// 这样做的原因在于，能够控制entities的搜索路径。在上面例子中，我控制的路径是当前运行js路径（__dirname）的目录中的任意（**）子目录中，搜索所有的以.entity.js或.entity.ts作为后缀的文件作为扫描为entity文件。

// 我的所有entity.ts都在放在src/entity这个目录下

import { UserModule } from './module/system/user/user.module';
import { MainModule } from './module/main/main.module';
import { AxiosModule } from './module/axios/axios.module';
import { LogsModule } from './module/monitor/mainlog/logs.module';
import { StationGameModule } from './module/station/game/game.module';

const entitiesPaths = [join(__dirname, '**', '*.entity.{ts,js}')];
@Module({
  imports: [
    // 配置模块
    ConfigModule.forRoot({
      cache: true,
      load: [...configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'dbbase',
        timezone: '+08:00',
        entities: entitiesPaths,
        synchronize: false,
        logging: true,
      }),
    }),
    MainModule,
    AxiosModule,
    UserModule,
    LogsModule,
    StationGameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
