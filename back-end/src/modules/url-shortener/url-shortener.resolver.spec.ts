import { Test, TestingModule } from '@nestjs/testing';
import { UrlShortenerResolver } from './url-shortener.resolver';

describe('UrlShortenerResolver', () => {
  let resolver: UrlShortenerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlShortenerResolver],
    }).compile();

    resolver = module.get<UrlShortenerResolver>(UrlShortenerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
