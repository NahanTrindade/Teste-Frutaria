import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(email);

    if (user && (await bcrypt.compare(pass, user.password))) {
      const payload = { sub: user.id, email: user.email };

      return { access_token: await this.jwtService.signAsync(payload) };
    }

    throw new UnauthorizedException();
  }
}
