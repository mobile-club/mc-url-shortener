import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageDto {
  @Field((_type) => Int, { nullable: true })
  id?: number;

  @Field()
  message: string;
}
