import { Body, Controller, Post } from '@nestjs/common';
import { SignUpRequest } from './dto/signup.request';
import { SignUpUseCase } from '../usecase/signup.usecase';

@Controller('users')
export class UserController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  @Post('/signup')
  public signUp(@Body() request: SignUpRequest): Promise<string> {
    return this.signUpUseCase.execute(request);
  }
}
