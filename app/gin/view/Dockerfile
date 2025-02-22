# Node.jsのベースイメージを使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /go/src/app/gin/view

# package.json と package-lock.json をコピー
COPY ./package*.json ./

# 残りのフロントエンドのコードをコピー
COPY ./ /go/src/app/gin/view

# 依存関係をインストール
RUN npm install



