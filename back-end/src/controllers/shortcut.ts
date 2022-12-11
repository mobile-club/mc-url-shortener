import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { ShortcutService } from '../modules/shortcut/shortcut.service';

const HOME_PAGE = 'http://localhost:3000'; // TODO Config file

@Controller('r')
export class ShortcutController {
  constructor(private shortcutService: ShortcutService) {}

  @Get(':path')
  @Redirect(HOME_PAGE, 404) // TODO home page
  async redirect(@Param('path') path: string) {
    const shortcut = await this.shortcutService.findPath(path);

    // TODO increment counter

    return {
      statusCode: 302,
      url: shortcut.target,
    };
  }
}
