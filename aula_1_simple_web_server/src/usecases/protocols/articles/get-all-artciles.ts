import { Inject } from '@nestjs/common/decorators';
import { Article } from 'src/usecases/models/articles/article';
import { Validator } from '../validation/validator';

export interface GetAllArticles {
  handle(dtStart: Date, dtEnd: Date): Promise<Article[]>;
}

export class GetAllArticlesDB implements GetAllArticles {
  constructor(@Inject('Validator') private readonly validators: Validator[]) {}
  handle(dtStart: Date, dtEnd: Date): Promise<Article[]> {
    this.validators.forEach((element) => {
      element.handle(dtStart);
      element.handle(dtEnd);
    });

    console.log(` trazendo artigos do banco de dados `);
    // conectar com o banco
    // aplica alguma logica
    // return result
    return Promise.resolve(null);
  }
}

export class GetAllArticlesWeb implements GetAllArticles {
  constructor(@Inject('Validator') private readonly validators: Validator[]) {}
  handle(dtStart: Date, dtEnd: Date): Promise<Article[]> {
    this.validators.forEach((element) => {
      element.handle(dtStart);
      element.handle(dtEnd);
    });
    console.log(` trazendo artigos da web`);
    // conectar com o banco
    // aplica alguma logica
    // return result
    return Promise.resolve(null);
  }
}
