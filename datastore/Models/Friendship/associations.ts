import { RegisterModelAssociationsType } from "../types";

const registerFriendshipAssociations: RegisterModelAssociationsType = ({
  Friendship,
  User
}) => {
  Friendship.belongsTo(User, {
    foreignKey: "requesterId",
    as: "requester"
  });

  Friendship.belongsTo(User, {
    foreignKey: "receiverId",
    as: "receiver"
  });
};

export default registerFriendshipAssociations;
