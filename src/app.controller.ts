import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user/user.service";

@Controller()
export class AppController {
  constructor(
      private readonly userService: UserService,
  ) {}

}
