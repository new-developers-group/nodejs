import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // connecta banco dados
    // aplica alguma logica
    return 'Hello World!';
  }
}
