import { RegisterModelScopesType } from "../types";
import { FriendshipTypes } from "./types";

const registerFriendshipScopes: RegisterModelScopesType<FriendshipTypes> = Friendship => {
  Friendship.addScope("default", {
    attributes: { exclude: [ "status" ] }
  });

  Friendship.addScope("public", {
    attributes: { exclude: [ "status" ] }
  });

  Friendship.addScope("private", {
    attributes: { exclude: [] }
  });
};

export default registerFriendshipScopes;
