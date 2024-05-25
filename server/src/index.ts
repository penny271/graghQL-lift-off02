import { resolvers } from "./resolvers";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { TrackAPI } from "./datasources/track-api";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    // * dataSourcesオブジェクトを返すと、すべてのリゾルバがcontextValueパラメータからRestDataSource APIを利用できるようになります。
    context: async () => {
      const { cache } = server;
      //* this object becomes our resolver's contextValue, the third positional argument
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
