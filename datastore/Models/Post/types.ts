import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

interface PostAttributeTypes {
  id: string;
  image: string;
  caption?: string;
  likes: number;
};

interface PostTypes extends Model<InferAttributes<PostTypes>, InferCreationAttributes<PostTypes>>, PostAttributeTypes {};

export {
  PostAttributeTypes,
  PostTypes
};
