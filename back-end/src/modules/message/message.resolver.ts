import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MessageDto } from './message.dtos';
import { MessageService } from './message.service';

@Resolver()
export class MessageResolver {
  constructor(private messageService: MessageService) {}

  @Query((_returns) => [MessageDto])
  messages() {
    return this.messageService.findAll();
  }

  @Mutation((_returns) => MessageDto)
  message(@Args('message', { type: () => String }) message: string) {
    return this.messageService.save(message);
  }
}
