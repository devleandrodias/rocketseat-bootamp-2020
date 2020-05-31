import { container } from 'tsyringe';
import { IStorageProvider } from './storage-provider/models/storage-provider.interface';
import { DiskLocalStorageProvider } from './storage-provider/implementations/disk-local-storage-provider.impl';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskLocalStorageProvider
);
