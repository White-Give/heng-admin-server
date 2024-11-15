import { Body, Controller, HttpCode, Post, Request } from '@nestjs/common';
import { MainService } from './main.service';
import { LoginDto } from './dto';

@Controller('/')
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Post('/login')
  @HttpCode(200)
  login(@Body() user: LoginDto, @Request() req) {
    const clientInfo = {
      ipaddr: req.ip,
    };
    return this.mainService.login(user, clientInfo);
  }
}
