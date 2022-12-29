import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import bcrypt = require("bcrypt");

const saltRounds = 10;

class UserService {
    async register(userName: string, password: string) {
        const userRepo = AppDataSource.getRepository(User);
        const user = new User();
        user.userName = userName;
        user.password = await bcrypt.hash(password, saltRounds);
        return userRepo.save(user);
    }
}

export default new UserService();
