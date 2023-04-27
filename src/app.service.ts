import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API/HELLO Hello World!';
  }

  getJson(): { message: string } {
    return { message: 'Hello, API/JSON World!!!' };
  }
}
