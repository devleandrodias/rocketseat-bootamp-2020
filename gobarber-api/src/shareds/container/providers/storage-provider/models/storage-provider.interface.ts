export interface IStorageProvider {
  saveFile(pathFile: string): Promise<string>;
  deleteFile(pathFile: string): Promise<void>;
}
