import { TrackAPI } from "./datasources/track-api";

//* server/srcフォルダに、context.tsという新しいファイルを作成します。ここで、サーバーに渡すコンテキストを記述する型を定義します。
export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};
