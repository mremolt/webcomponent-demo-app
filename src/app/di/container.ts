import { IRandomNmberGenerator } from '../interfaces/random-number-generator.interface';
import { RandomNumbersService } from '../services/random-numbers.service';

import { DiContainer } from '../../lib/di/di-container.class';
import { TYPES } from './types';

const container = DiContainer.getInstance();

container.bind<IRandomNmberGenerator>(TYPES.RandomNumberGenerator).to(RandomNumbersService);
