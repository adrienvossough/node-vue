import { User, UserDocument } from './user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async createUser(user: User): Promise<User> {
        return new this.userModel(user).save()
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find()
    }

    async findById(id: string): Promise<User> {
        return this.userModel.findById(id)
    }

    async findByName(name: string): Promise<User[]> {
        return this.userModel.find({ $or: [{ lastname: name }, { firstname: name }] })
    }

    async updateUser(id: string, newUser: UserDocument): Promise<User> {
        return (await this.userModel.findById(id)).updateOne(newUser)
    }

    async delete(id: string) {
        return this.userModel.findById(id).remove()
    }
}
