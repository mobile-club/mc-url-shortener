import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShortcutDto } from './shortcut.dtos';
import { ShortcutService } from './shortcut.service';

@Resolver()
export class ShortcutResolver {
  constructor(private service: ShortcutService) {}
  @Mutation((_returns) => ShortcutDto)
  createUrl(@Args('target', { type: () => String }) target: string) {
    return this.service.create(target);
  }
}
