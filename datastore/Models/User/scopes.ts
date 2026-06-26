
import { RegisterModelScopesType } from "../types";

import { UserTypes } from "./types";

const registerUserScopes: RegisterModelScopesType<UserTypes> = User => {
  User.addScope("default", {
    attributes: { exclude: [] }
  });

  User.addScope("public", {
    attributes: { exclude: [ "password" ] }
  });
  
  User.addScope("private", {
    attributes: { exclude: [] }
  });
};

export default registerUserScopes;
