import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UrlShortenerDto {
  @Field()
  shortenedUrl: string;
}
