import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

type UserTypes = "guest" | "standard" | "admin";

interface UserAttributes {
  id?: string;
  username: string;
  password: string;
  userType: UserTypes;
}

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: string;
  username: CreationOptional<string>;
  password: CreationOptional<string>;
  userType: UserTypes;
};

export {
  UserAttributes,
  UserModel
};
