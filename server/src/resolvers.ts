import type { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // * shema.tsのルートクエリ内のルートフィールドと同じ名前である必要があります
    // ! => リゾルバは、データを入力するフィールドと同じ名前でなければなりません。
    // ^ tracksForHome: (parent, args, contextValue, info) => {},
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  // * TrackAPIのgetAuthorメソッドにはauthorIdが必要である。この値は、リゾルバに渡された親引数から取得します。parent引数には、tracksForHomeリゾルバによって返されたデータが含まれており、tracksForHomeはリストを返すため、Apollo Serverはそのリストを繰り返し、各トラックに対して一度だけauthorリゾルバを呼び出します。parentの値として現在のトラックを渡すことで、authorIdを抽出することができます。
  // ! Track typeのauthorフィールドに対するリゾルバ
  // ^ Trackタイプのauthorフィールドに対するリゾルバは、実質的にそのフィールドの値を「上書き」しています。ただし、正確には「上書き」というより、「解決」しています。リゾルバは、特定のフィールドがどのようにデータを取得するかを定義する役割を持っています。
  Track: {
    author: ({ authorId }, __, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
