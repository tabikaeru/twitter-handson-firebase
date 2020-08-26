# GET STARTED

```
yarn
```

# 実行環境環境

```
node version v10.18.0
yarn version 1.17.3
firebase-tools 8.7.0
```

# firebase プロジェクトの登録

`.firebaserc`の中の`YOUR_PROJECT_NAME`の部分 を自分が登録した firebase のプロジェクト名に変更してください．

# Blaze Plan が使えない人用(ローカルで functions を動かす設定)

## 説明

Firebase には Blaze プラン(従量課金)と Spark プラン(無料)の２種類があります．
Spark プランでは functions が使えないため，この hands on では基本的に Firebae の Blaze プランを使用する前提で講義を行います．
Blaze プランはかなり無料枠が大きいので基本的にはお金がかからない想定ではありますが，一応絶対無料枠で行いたいという人向けにも講義資料を作成しています．

## サービスアカウント作成方法

https://firebase.google.com/docs/admin/setup?hl=ja

## エミュレートされる関数の管理者認証情報を設定

```
export GOOGLE_APPLICATION_CREDENTIALS="path/to/google-service-account.json"
```

## .env ファイルの作成

.envExample を.env ファイルにリネームして，#を消して`YOUR_DATABASE_URL`の部分を自分の URL に置き換える.

## firebae shell の起動

```
 yarn shell
```

## ローカルでの onRequest 関数の使い方

```
firebase > YOUR_FUNCTION_NAME()
```

## ローカルでの onCall 関数の使い方

```
firebase > YOUR_FUNCTION_NAME({key: value})
```
