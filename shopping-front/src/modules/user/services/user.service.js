import { User } from '../models/user'
import ApiService from '@/modules/api/api.service'

class UserService extends ApiService {
    constructor(protocol, host, port, T, endpoint = "") {
        super(protocol, host, port, T, endpoint = "")
    }

    getAllUsers = async () => {
        return this.getAll()
    }

}

export default Object.freeze(new UserService(process.env.BACK_PROTOCOL, process.env.BACK_HOST, process.env.BACK_PORT, User, "users"))