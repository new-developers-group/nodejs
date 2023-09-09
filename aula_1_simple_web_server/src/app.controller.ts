import { Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GetAllArticles } from './usecases/protocols/articles/get-all-artciles';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('GetAllArticles') private readonly getAllArticles: GetAllArticles,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  qualquer_nome() {
    this.getAllArticles.handle(new Date('1991-02-03'), new Date());
    return { status: 200, message: 'post method funcionou' };
  }
}
