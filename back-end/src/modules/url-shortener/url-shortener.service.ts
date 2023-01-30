import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes } from 'crypto'
import { UrlShortened } from 'src/entities/url-shortened.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UrlShortenerService {
  
  constructor(
    @InjectRepository(UrlShortened)
    private urlShortenerRepository: Repository<UrlShortened>,
  ) {}

  readonly ALPHABET = 'useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict'
  readonly SIZE = 5

  public shorten(url: string) {
    const urlObject = new URL(url); 
    const shortUrl = this.randomString()
    this.urlShortenerRepository.save({ originalUrl: urlObject.href, shortenedUrl: shortUrl });
    return "s/" + shortUrl; 
  }

  public async redirect(path: string): Promise<string> {
    const url = await this.urlShortenerRepository.findOneOrFail({ where: {shortenedUrl: path}});
    return url.originalUrl
} 

  private randomString(): string {
    const bytes = randomBytes(this.SIZE)
    let shortUrl = ''
    for (let i = 0; i < this.SIZE; i++) {
      shortUrl += this.ALPHABET[bytes[i] & (this.ALPHABET.length - 1)]
    }
    return shortUrl
  }
}
