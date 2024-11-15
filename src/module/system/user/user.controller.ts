import { Body, Controller, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/index';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  createUser(@Body() createUserDto: CreateUserDto, @Request() req) {
    console.log(createUserDto, req);
    return this.userService.createUser(createUserDto);
  }
}
