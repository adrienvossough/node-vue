import { User, UserDocument } from './user.schema';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) { }

    @Post()
    async create(@Body() user: User) {
        return this.userService.createUser(user)
    }

    @Get()
    async findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    async findById(@Param() param) {
        return this.userService.findById(param.id)
    }

    @Get('name/:name')
    async findByname(@Param() param) {
        return this.userService.findByName(param.name)
    }

    @Put(':id')
    async updateuser(@Param() param, @Body() user: UserDocument) {
        return this.userService.updateUser(param.id, user)
    }

    @Delete(':id')
    async delete(@Param() param) {
        this.userService.delete(param.id)
    }




}

