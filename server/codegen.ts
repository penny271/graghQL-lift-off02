import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  // * これらのプラグインはコード生成プロセスで何を担当しているのだろうか？@graphql-codegen/typescriptはスキーマからTypeScriptの型を生成するのに必要な基本プラグインである。そして、@graphql-codegen/typescript-resolversも同様のことを行う。スキーマを確認し、定義した型とフィールドを考慮し、リゾルバ関数が使用し返すデータを正確に記述するために必要な型を出力する。
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // * contextType: "./context#DataSourceContext"を設定することで、生成されるリゾルバのコンテキストの型は常に./context#DataSourceContextで指定された型になります。
        // ! codegenで types.ts生成時は any だったコンテキストの型がDataSourceContextに変更されるようになり、コードの型安全性が向上します。(server/src/types.ts で contextType は自動的に生成され、使用される)
        contextType: "./context#DataSourceContext",
        // * configオブジェクトの中に、mappersという新しいキーを追加します。mappersはTrackキーを持つオブジェクトです。Trackの値として、./models#
        // - マッパーは、リゾルバ用に生成される型に組み込まれる。基本的には、リゾルバがTrack型を扱う際に、（スキーマが定義する形ではなく）この形が取られることを示す。
        mappers: {
          Track: "./models#TrackModel",
          Author: "./models#AuthorModel",
        },
      },
    },
  },
};

export default config;
