import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  
  @Get()
  async findAll() {
    const messageList = await this.messageService.findAll();
    return {
      data: messageList,
      statusCode: 200
    };
  }

  @Get(':id')
  async find(@Param('id') id: number) {
    const message = await this.messageService.findOne(id);
    return {
      data: message,
      statusCode: 200
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() message: Message
  ) {
    await this.messageService.update(id, message);
    return {
      data: message,
      statusCode: 200
    }
  }

  @Post()
  async create(@Body() message: Message) {
    await this.messageService.create(message);
    return {
      data: message,
      statusCode: 200
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.messageService.delete(id);
    return {
      data: { messageId : id },
      statusCode: 200
    }
  }
}
