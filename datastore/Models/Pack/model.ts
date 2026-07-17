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

    ownerId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [ "drafted", "published", "hidden" ]
    }
  });

  return packModel;
};

export default definePackModel;
