import { container } from 'tsyringe';

import { IHashProvider } from './hash-providers/models/hash-provider.interface';
import { BcryptHashProvider } from './hash-providers/implementations/bcrypt-hash-provider';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);
