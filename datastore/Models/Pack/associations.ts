import { RegisterModelAssociationsType } from "../types";

const registerPackAssociations: RegisterModelAssociationsType = ({
  Pack,
  User,
  Post,
}) => {
  Pack.belongsTo(User);

  Pack.hasMany(Post);
};

export default registerPackAssociations;
