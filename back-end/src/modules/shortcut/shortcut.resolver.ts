import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShortcutDto } from './shortcut.dtos';
import { ShortcutService } from './shortcut.service';
import { Shortcut } from '../../entities/shortcut.entity';

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    console.log('Invalid URL');
    return false;
  }
}

@Resolver()
export class ShortcutResolver {
  constructor(private service: ShortcutService) {}

  @Query((_returns) => [ShortcutDto])
  shortcuts() {
    return this.service.list();
  }

  @Mutation((_returns) => ShortcutDto)
  createShortcut(@Args('target', { type: () => String }) target: string) {
    if (!isValidUrl(target)) {
      throw new Error('Invalid target URL');
    }
    return this.service.create(target);
  }
}
