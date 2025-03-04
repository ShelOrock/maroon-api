import Sequelize from "sequelize";

import datastore from "../../connection";

import { UserModel } from "./types";

const UserDefinition = datastore.define<UserModel>("user", {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },

  username: {
    type: Sequelize.STRING,
    allowNull: false
  },

  password: {
    type: Sequelize.STRING,
    allowNull: true
  },

  userType: {
    type: Sequelize.STRING,
    validate: {
      isIn: [
        [ "guest", "standard", "admin" ]
      ]
    }
  }
});

export default UserDefinition;
