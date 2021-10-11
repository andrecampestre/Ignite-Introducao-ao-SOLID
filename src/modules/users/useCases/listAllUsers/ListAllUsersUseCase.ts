import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    const users = this.usersRepository.list();

    console.log(user.admin);

    if (!user.admin) {
      throw new Error("User admin privileges required!");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
