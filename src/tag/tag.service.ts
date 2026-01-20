import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    return [
      'Los Angeles Lakers',
      'Boston Celtics',
      'Chicago Bulls',
      'New York Knicks',
    ];
  }
}
