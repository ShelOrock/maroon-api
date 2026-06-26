import { RegisterModelScopesType } from "../types";

import { PostTypes } from "./types";

const registerPostScopes: RegisterModelScopesType<PostTypes> = Post => {
  Post.addScope("default", {
    attributes: { exclude: [] }
  });

  Post.addScope("public", {
    attributes: { exclude: [] }
  });
};

export default registerPostScopes;
