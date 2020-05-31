import { promises } from 'fs';
import { resolve } from 'path';
import uploadConfig from '@configs/upload.config';
import { IStorageProvider } from '../models/storage-provider.interface';

export class DiskLocalStorageProvider implements IStorageProvider {
  public async saveFile(pathFile: string): Promise<string> {
    await promises.rename(
      resolve(uploadConfig.tempFolder, pathFile),
      resolve(uploadConfig.uploadFolder, pathFile)
    );

    return pathFile;
  }

  public async deleteFile(filePath: string): Promise<void> {
    const file = resolve(uploadConfig.uploadFolder, filePath);

    try {
      await promises.stat(file);
    } catch (error) {
      return;
    }

    await promises.unlink(file);
  }
}
