import { DataTypes } from "sequelize";
import { DefineModelType } from "../types";
import { CommentTypes } from "./types";

const defineCommentModel: DefineModelType<CommentTypes> = connection => {
  const commentModel = connection.define<CommentTypes>("comment", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },

    postId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

  return commentModel;
};

export default defineCommentModel;
