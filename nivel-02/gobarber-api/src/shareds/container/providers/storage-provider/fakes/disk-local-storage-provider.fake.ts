import { IStorageProvider } from '../models/storage-provider.interface';

export class FakeDiskStorageProvider implements IStorageProvider {
  private _storage: string[] = [];

  public saveFile = async (pathFile: string): Promise<string> => {
    this._storage.push(pathFile);
    return pathFile;
  };

  public deleteFile = async (pathFile: string): Promise<void> => {
    const findIndex = this._storage.findIndex(
      storageFile => storageFile === pathFile
    );

    this._storage.splice(findIndex, 1);
  };
}
