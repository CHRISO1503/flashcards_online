import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import bcrypt = require("bcrypt");

const saltRounds = 10;

class UserService {
    async register(userName: string, password: string) {
        const userRepo = AppDataSource.getRepository(User);
        if (
            (await userRepo.findOne({ where: { userName: userName } })) != null
        ) {
            return { code: 409, message: "User already exists" };
        }
        const user = new User();
        user.userName = userName;
        user.password = await bcrypt.hash(password, saltRounds);
        userRepo.save(user);
        return { code: 201, message: "Registration successful" };
    }

    async login(userName: string, password: string) {
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.findOne({ where: { userName: userName } });
        if (await bcrypt.compare(password, user.password)) {
            return { code: 200, message: "Auth successful" };
        } else {
            return { code: 401, message: "Auth fail" };
        }
    }
}

export default new UserService();
