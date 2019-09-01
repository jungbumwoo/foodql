import { getFood } from "./db";

const resolvers = {
    Query: {
        foods: () => getFood()
    }
};

export default resolvers;