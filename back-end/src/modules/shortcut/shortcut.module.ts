import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortcutService } from './shortcut.service';
import { ShortcutResolver } from './shortcut.resolver';
import { Shortcut } from '../../entities/shortcut.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shortcut])],
  providers: [ShortcutService, ShortcutResolver],
  exports: [ShortcutService],
})
export class ShortcutModule {}
