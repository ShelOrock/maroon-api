import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

interface PackAttributeTypes {
  id: string;
  postId: string;
  openCount: number;
};

interface PackTypes extends Model<InferAttributes<PackTypes>, InferCreationAttributes<PackTypes>>, PackAttributeTypes {};

export {
  PackAttributeTypes,
  PackTypes
};
