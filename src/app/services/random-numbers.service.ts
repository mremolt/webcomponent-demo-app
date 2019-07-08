import { injectable } from 'inversify';

import { IRandomNmberGenerator } from '../interfaces/random-number-generator.interface';

@injectable()
export class RandomNumbersService implements IRandomNmberGenerator {
  public getNumber(): number {
    return Math.random();
  }
}
