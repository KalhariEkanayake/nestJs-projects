import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { RegisterResponse } from './types/user.type';
import { RegisterDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Resolver('User')
// @UseFilters
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill the all fields');
    }

    const user = await this.usersService.register(registerDto);

    return { user };
  }

  @Query(() => [User])
  async getUsers() {
    return this.usersService.getUsers();
  }
}
