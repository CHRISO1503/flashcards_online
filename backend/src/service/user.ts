import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");

const saltRounds = 10;

class UserService {
    async register(userName: string, password: string) {
        userName = userName.toUpperCase();
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
        userName = userName.toUpperCase();
        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.findOne({ where: { userName: userName } });
        if (user == null) {
            return { code: 401, message: "No such user exists", token: null };
        }
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                { id: user.id, username: user.userName },
                "secret"
            );
            return { code: 200, message: "Auth successful", token: token };
        } else {
            return { code: 401, message: "Incorrect password", token: null };
        }
    }
}

export default new UserService();
