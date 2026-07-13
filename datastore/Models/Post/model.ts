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

    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
  
    image: {
      type: DataTypes.STRING,
    },
  
    caption: {
      type: DataTypes.TEXT,
    },
  
    likes: {
      type: DataTypes.INTEGER,
    },

    status: {
      type: DataTypes.STRING,
      values: [ "drafted", "published" ]
    }
  });

  return postModel;
};

export default definePostModel;
