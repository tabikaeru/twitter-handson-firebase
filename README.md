# GET STARTED

```
yarn
yarn start
```

# Blaze Plan が使えない人用

## 説明

Firebae には Blaze プラン(従量課金)と Spark プラン(無料)の２種類があります．
Spark Plan では functions が使えないため，この hands on では基本的に Firebae の Blaze Plan を使用する前提で講義を行います．
Blaze Plan はかなり無料枠が大きいので基本的にはお金がかからない想定ではありますが，一応絶対無料枠で行いたいと言う人向けにも講義資料を作成しています．
しかし，Spark プランの説明は殆ど行わない予定ですので，悪しからず．

## コードの置き換え

Spark Plan を使う人は`// Blazeプランを使う人`とコメントアウトをしている部分を`// Sparkプランを使う人`と書いている部分に置き換えてコードを実行してください．

Spark プランを使う人用の設定なので，Blaze プランを使う人は無視してください．

## サービスアカウント作成方法

https://firebase.google.com/docs/admin/setup?hl=ja

## エミュレートされる関数の管理者認証情報を設定

```
export GOOGLE_APPLICATION_CREDENTIALS="path/to/google-service-account.json"
```

## .env ファイルの作成

.envExample を.env ファイルに置き換え，`DATABASE_URL`置き換える

## local での functions の起動方法

```
yarn serve
```
