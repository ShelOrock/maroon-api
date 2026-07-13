import { faker } from "@faker-js/faker";

import { UserTypes } from "../../Models/User/types";
import { PostTypes } from "../../Models/Post/types";

const generatePosts = (users: UserTypes[]) => {

  enum PostStatus {
    DRAFTED = "drafted",
    PUBLISHED = "published",
  };

  const posts: Partial<PostTypes>[] = [];

  users.forEach(user => {
    const numberOfPosts = faker.helpers.weightedArrayElement([
      { value: 0, weight: 2 },
      { value: 1, weight: 8 },
      { value: 10, weight: 25 },
      { value: 25, weight: 30 },
      { value: 50, weight: 25 },
      { value: 100, weight: 8 },
      { value: 1000, weight: 2 }
    ]);

    for(let i = 0; i < numberOfPosts; i++) {
      const numberOfLikes = faker.helpers.weightedArrayElement([
        { value: 3, weight: 1 },
        { value: 5, weight: 1 },
        { value: 8, weight: 2 },
        { value: 13, weight: 2 },
        { value: 21, weight: 3 },
        { value: 34, weight: 4 },
        { value: 55, weight: 6 },
        { value: 89, weight: 8 },
        { value: 144, weight: 11 },
        { value: 233, weight: 12 },
        { value: 377, weight: 12 },
        { value: 670, weight: 11 },
        { value: 987, weight: 8 },
        { value: 1597, weight: 6 },
        { value: 2584, weight: 4 },
        { value: 4181, weight: 3 },
        { value: 6765, weight: 2 },
        { value: 10946, weight: 2 },
        { value: 17711, weight: 1 },
        { value: 28657, weight: 1 },
      ]);

      const status = faker.helpers.weightedArrayElement([
        { value: PostStatus.DRAFTED, weight: 10 },
        { value: PostStatus.PUBLISHED, weight: 90 },
      ]);

      posts.push({
        userId: user.id,
        image: faker.image.url(),
        caption: faker.lorem.sentences(),
        likes: numberOfLikes,
        status
      });
    };
  });

  return posts;
};

export default generatePosts;
