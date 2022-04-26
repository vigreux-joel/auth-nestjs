import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {prisma} from "../prisma/const";

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return prisma.user.findMany();
  }

  findOne(id: number) {
    return prisma.user.findUnique({where: {id: id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return  prisma.user.update({
      where: { id: id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return prisma.user.delete({where: {id: id}})
  }
}
