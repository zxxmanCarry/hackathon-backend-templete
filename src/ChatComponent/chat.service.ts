import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}

  async create(chat: Chat) {
    return await this.chatRepository.save(chat);
  }

  async delete(id: number) {
    return await this.chatRepository.delete({ id: id });
  }

  async update(id: number, chat: Chat) {
    return await this.chatRepository.update({ id: id }, { ...chat });
  }

  async findOne(id: number) {
    return await this.chatRepository.findOneBy({ id: id });
  }

  async findAll(): Promise<Chat[]> {
    return await this.chatRepository.find();
  }
}
