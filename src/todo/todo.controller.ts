import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(){
    return await this.todoService.findAll();
  }

  @Post()
  async sendData(@Body() dto:CreateTodoDto){
    return await this.todoService.create(dto);
  }

  @Patch(':id/task')
  async changeData(@Param('id') id:string, @Body() body: {task: string}){
    return await this.todoService.changeData(body, id)
  }

  @Delete(':id')
  async deleteData(@Param('id') id: string){
    return await this.todoService.deleteData(id)
  }
  @Patch(':id/complete')
  async changeComplete(@Param('id') id:string, @Body() body: {complete: boolean}){
    return await this.todoService.changeComplete(body, id)
  }
}
