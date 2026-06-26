import { DataTypes } from "sequelize";

import { DefineModelType } from "../types";
import { PackTypes } from "./types";

const definePackModel: DefineModelType<PackTypes> = connection => {
  const packModel = connection.define<PackTypes>("pack", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },

    postId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    openCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });

  return packModel;
};

export default definePackModel;
