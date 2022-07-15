import { Injectable } from '@nestjs/common';
import Joi from 'joi';
import { UserService } from '../UserComponent/user.service';

export interface Account {
  id: string;
  pw: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async Register(body: Account) {
    const schema = Joi.object().keys({
      id: Joi.string().alphanum().min(2).max(10).required(),
      pw: Joi.string().required(),
    });
    const result = schema.validate(body);
    if (result.error) return {
      status: result.error,
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
