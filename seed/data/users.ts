import { UserAttributes } from "../../datastore/definitions/user/types";

const createUser = (): UserAttributes => {
  return {
    username: "shelorock",
    password: "meowmix1",
    userType: "standard",
  };
};

export default createUser;
