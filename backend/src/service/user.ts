import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

class UserService {
    async register(userName: string) {
        const userRepo = AppDataSource.getRepository(User);
        const user = new User();
        user.userName = userName;

        return userRepo.save(user);
    }
}

export default new UserService();
