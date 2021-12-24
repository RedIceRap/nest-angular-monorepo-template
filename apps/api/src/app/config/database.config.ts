import {
  ConfigModule,
  ConfigModuleOptions,
  ConfigObject,
  ConfigService,
  registerAs,
} from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const configObject = registerAs(
  'database',
  (): ConfigObject => ({
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    autoLoadEntities: !!process.env.DATABASE_AUTO_LOAD_ENTITIES,
    synchronize: !!process.env.DATABASE_SYNCHRONIZE,
  })
);

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: ['.env'],
  load: [configObject],
};

export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule.forRoot(configModuleOptions)],
  useFactory: async (config: ConfigService) => config.get('database'),
  inject: [ConfigService],
};
