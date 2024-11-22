import { NestFactory, PartialGraphHost } from '@nestjs/core';
import { AppModule } from './app.module';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { mw as requestIpMw } from 'request-ip';

import { HttpExceptionsFilter } from './common/filters/http-exceptions-filter';
import * as fs from 'fs'; // 导入 fs 模块

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true, // 开启跨域访问
    snapshot: true,
    abortOnError: false, // <--- THIS
  });

  // 设置访问频率
  app.use(
    rateLimit({
      windowMs: 5 * 60 * 1000, // 5分钟
      max: 1000, // 限制15分钟内最多只能访问1000次
    }),
  );
  // 全局路由前缀
  app.setGlobalPrefix('v1');
  // 全局验证
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  // 异常过滤器
  app.useGlobalFilters(new HttpExceptionsFilter());

  // web 安全，防常见漏洞
  // 注意： 开发环境如果开启 nest static module 需要将 crossOriginResourcePolicy 设置为 false 否则 静态资源 跨域不可访问
  // { crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' }, crossOriginResourcePolicy: false }
  app.use(helmet());

  // 获取真实 ip
  app.use(requestIpMw({ attributeName: 'ip' }));

  //服务端口
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(
    `server 服务启动成功 `,
    '\n',
    '\n',
    '服务地址',
    `http://localhost:${port}/`,
  );
}
bootstrap().catch((err: any) => {
  fs.writeFileSync('graph.json', PartialGraphHost.toString() ?? err);
  process.exit(1);
});
