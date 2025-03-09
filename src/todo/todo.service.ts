import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prisma:PrismaService){}

  async findAll() {
    return this.prisma.todo.findMany()
  }

  async create(dto: CreateTodoDto){
    return this.prisma.todo.create({
      data: dto,
    })
  }

  async changeData(body, id){
    return await this.prisma.todo.update({
      where: {id: Number(id)},
      data: {task: body.task}
    })
  }

  async deleteData(id){
    await this.prisma.todo.delete({
      where: {id: Number(id)},
    })
    return {message: 'task deleted'}
  }

  async changeComplete(body, id){
    return await this.prisma.todo.update({
      where: {id: Number(id)},
      data: {complete: body.complete}
    })
  }
}