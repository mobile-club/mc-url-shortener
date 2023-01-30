import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlShortened } from 'src/entities/url-shortened.entity';
import { UrlShortenerController } from './url-shortener.controller';
import { UrlShortenerResolver } from './url-shortener.resolver';
import { UrlShortenerService } from './url-shortener.service'; 

@Module({
  imports: [TypeOrmModule.forFeature([UrlShortened])],
  controllers: [UrlShortenerController],
  providers: [UrlShortenerResolver, UrlShortenerService]
})
export class UrlShortenerModule {}
