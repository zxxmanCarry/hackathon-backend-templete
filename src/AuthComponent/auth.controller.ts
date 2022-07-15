import { Body, Controller, Get, Post } from "@nestjs/common";
import { Account, AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor (
        private readonly authService: AuthService
    ) {}

    @Post('register')
    async Register(@Body() body: Account) {
        return this.authService.Register(body);
    }

    @Post('login')
    async Login(@Body() body: Account) {
        return this.authService.Login(body);
    }

    @Get('check')
    async Check() {
        // TODO
    }

    @Post('logout')
    async Logout() {
        // TODO
    }
}