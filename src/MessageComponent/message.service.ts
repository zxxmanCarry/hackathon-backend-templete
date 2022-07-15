import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async create(chat: Message) {
    return await this.messageRepository.save(chat);
  }

  async delete(id: number) {
    return await this.messageRepository.delete({ id: id });
  }

  async update(id: number, chat: Message) {
    return await this.messageRepository.update({ id: id }, { ...chat });
  }

  async findOne(id: number) {
    return await this.messageRepository.findOneBy({ id: id });
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find();
  }
}
