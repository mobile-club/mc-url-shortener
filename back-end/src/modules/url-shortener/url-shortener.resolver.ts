import { Args, Query, Resolver } from '@nestjs/graphql';
import { UrlShortenerDto } from './url-shortener.dtos';
import { UrlShortenerService } from './url-shortener.service';

@Resolver()
export class UrlShortenerResolver {
    constructor(private urlShortenerService: UrlShortenerService) {}
    @Query(returns => UrlShortenerDto)
    shortenUrl(@Args('url') url: string) {
        return {shortenedUrl: this.urlShortenerService.shorten(url) }
    }
}
