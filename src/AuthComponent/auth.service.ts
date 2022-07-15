import { Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { UserService } from '../UserComponent/user.service';

export interface Account {
  id: string;
  pw: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async Register(body: Account) {
    const validate = Joi.object({
      id: Joi.string().alphanum().min(2).max(10).required(),
      pw: Joi.string().min(8).required(),
    }).validate(body);
    if (validate.error) return {
      status: validate.error,
      statusCode: 400
    };

    try {
      const exists = await this.userService.findOne(body.id);
      if(exists) return {
        status: 'conflict',
        statusCode: 409
      }

      // Success
      // TODO

    } catch (e) {
      return {
        status: e,
        statusCode: 500
      };
    }
  }

  async Login(body: Account) {
    if(!body.id || !body.pw) return {
      status: 'Unauthrized',
      statusCode: 401
    }
    try {
      const user = await this.userService.findOne(body.id);
      if(!user || user.password != body.pw) return {
        status: 'Unauthrized',
        statusCode: 401
      }

      // Success
      // TODO

    } catch(e) {
      return {
        status: e,
        statusCode: 500
      }
    }
  }

  async Check() {
    // TODO
  }

  async Logout() {
    // TODO
  }
}
