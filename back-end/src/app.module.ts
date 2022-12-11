import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Connection } from 'typeorm';

import { ShortcutModule } from './modules/shortcut/shortcut.module';
import { ShortcutController } from './controllers/shortcut';

const graphQLConfig = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  debug: false,
  playground: true,
  autoSchemaFile: true,
});

const typeORMConfig = TypeOrmModule.forRoot();

const modules = [ShortcutModule];

@Module({
  imports: [graphQLConfig, typeORMConfig, ...modules],
  controllers: [ShortcutController],
})
export class AppModule {
  constructor(private _connection: Connection) {}
}
