import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from './entities/chat.entity';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  
  @Get()
  async findAll() {
    const chatList = await this.chatService.findAll();
    return {
      data: chatList,
      statusCode: 200
    };
  }

  @Get(':id')
  async find(@Param('id') id: number) {
    const chat = await this.chatService.findOne(id);
    return {
      data: chat,
      statusCode: 200
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() chat: Chat
  ) {
    await this.chatService.update(id, chat);
    return {
      data: chat,
      statusCode: 200
    }
  }

  @Post()
  async create(@Body() chat: Chat) {
    await this.chatService.create(chat);
    return {
      data: chat,
      statusCode: 200
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.chatService.delete(id);
    return {
      data: { chatId : id },
      statusCode: 200
    }
  }
}
