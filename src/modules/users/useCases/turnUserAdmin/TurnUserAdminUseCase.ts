import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    console.log(user_id);
    console.log(user);
    if (!user) {
      throw new Error("User does not exist");
    }

    user.admin = true;

    return user;
  }
}

export { TurnUserAdminUseCase };
