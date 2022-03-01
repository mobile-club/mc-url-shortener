import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from '../../entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageResolver } from './message.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessageService, MessageResolver],
})
export class MessageModule {}
