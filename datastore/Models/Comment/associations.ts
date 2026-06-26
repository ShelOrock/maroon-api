import { RegisterModelAssociationsType } from "../types";

const registerCommentAssociations: RegisterModelAssociationsType = ({
  Comment,
  User,
  Post
}) => {
  Comment.belongsTo(User);

  Comment.belongsTo(Post);
};

export default registerCommentAssociations;
