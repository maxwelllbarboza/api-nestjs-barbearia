import {
	Controller,
	HttpStatus,
	Post,
	Req,
	Res,
	UseGuards
} from '@nestjs/common'
import { Request, Response } from 'express'
import LocalAuthGuard from './guards/local-guards'
import { AuthService } from './auth.service'

@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Req() req: Request, @Res() res: Response) {
		const { user } = req
		const token = await this.authService.login(user)
		return res.status(HttpStatus.OK).json({ user, token: token.access_token })
	}
}
