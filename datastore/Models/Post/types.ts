import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

type StatusTypes =
 | "drafted"
 | "published"

interface PostAttributeTypes {
  id: string;
  userId: string;
  image: string;
  caption?: string;
  likes: number;
  status: StatusTypes;
};

interface PostTypes extends Model<InferAttributes<PostTypes>, InferCreationAttributes<PostTypes>>, PostAttributeTypes {};

export {
  PostAttributeTypes,
  PostTypes
};
