import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetAllArticlesWeb } from './usecases/protocols/articles/get-all-artciles';
import {
  DateIsValid,
  NullableCheck,
} from './usecases/protocols/validation/validator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'GetAllArticles',
      useClass: GetAllArticlesWeb,
    },
    {
      provide: 'Validator',
      useFactory: () => {
        return [new NullableCheck(), new DateIsValid()];
      },
    },
  ],
})
export class AppModule {}
