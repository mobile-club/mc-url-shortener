import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShortcutDto {
  @Field()
  path: string;

  @Field()
  target: string;
}
