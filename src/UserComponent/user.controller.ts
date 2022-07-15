import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get()
  async findAll() {
    const userList = await this.userService.findAll();
    return {
      data: userList,
      statusCode: 200
    };
  }

  @Get(':id')
  async find(@Param('id') id: number) {
    const user = await this.userService.findOne(id);
    return {
      data: user,
      statusCode: 200
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: User
  ) {
    await this.userService.update(id, user);
    return {
      data: user,
      statusCode: 200
    }
  }

  @Post()
  async create(@Body() user: User) {
    await this.userService.create(user);
    return {
      data: user,
      statusCode: 200
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.userService.delete(id);
    return {
      data: { userId : id },
      statusCode: 200
    }
  }
}
