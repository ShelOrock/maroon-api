import { RegisterModelScopesType } from "../types";
import { CommentTypes } from "./types";

const registerCommentScopes: RegisterModelScopesType<CommentTypes> = Comment => {
  Comment.addScope("default", {
    attributes: { exclude: [] }
  });

  Comment.addScope("public", {
    attributes: { exclude: [] }
  });
};

export default registerCommentScopes;
