import { ModelStatic } from "sequelize";

import { UserTypes } from "./Models/User/types";
import { FriendshipTypes } from "./Models/Friendship/types";
import { PostTypes } from "./Models/Post/types";
import { PackTypes } from "./Models/Pack/types";
import { CommentTypes } from "./Models/Comment/types";

interface AppModelTypes {
  User: ModelStatic<UserTypes>;
  Friendship: ModelStatic<FriendshipTypes>;
  Post: ModelStatic<PostTypes>;
  Pack: ModelStatic<PackTypes>;
  Comment: ModelStatic<CommentTypes>;
};

export { AppModelTypes };
