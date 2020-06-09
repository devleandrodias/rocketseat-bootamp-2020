import { IHashProvider } from '../models/hash-provider.interface';

export class FakeHashProvider implements IHashProvider {
  public generateHash = async (payload: string): Promise<string> => payload;

  public compareHash = async (
    payload: string,
    hashed: string
  ): Promise<boolean> => payload === hashed;
}
