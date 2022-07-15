import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  
  async create(user: User) {
    return await this.userRepository.save(user);
  }

  async delete(id: number) {
    return await this.userRepository.delete({ id: id });
  }

  async update(id: number, user: User) {
    return await this.userRepository.update(
      { id: id },
      { ...user }
    )
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id: id });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
