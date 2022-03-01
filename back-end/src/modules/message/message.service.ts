import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../../entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  save(message: string) {
    return this.messageRepository.save({ message });
  }

  findAll(): Promise<Message[]> {
    return this.messageRepository.find();
  }
}
