import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async index(@Res() res) {
    res.sendFile('index.html');
  }
}
