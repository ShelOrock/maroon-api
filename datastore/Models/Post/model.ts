import { DataTypes } from "sequelize";

import { DefineModelType } from "../types";
import { PostTypes } from "./types";

const definePostModel: DefineModelType<PostTypes> = connection => {
  const postModel = connection.define<PostTypes>("post", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
  
    image: {
      type: DataTypes.STRING,
    },
  
    caption: {
      type: DataTypes.STRING,
    },
  
    likes: {
      type: DataTypes.INTEGER,
    }
  });

  return postModel;
};

export default definePostModel;
