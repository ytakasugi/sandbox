#!/bin/bash
## 作成対象ディレクトリ名
DIR_NAME=$1
FILE_NAME=${DIR_NAME}.ts

if [ -d ./${DIR_NAME} ]; then
  echo "既に存在するディレクトリのため、作成しません。"
else
  mkdir ${DIR_NAME}
fi

## ディレクトリ名と同じファイルを作成する
touch ./${DIR_NAME}/${FILE_NAME}

## コンパイル用シェルをプロジェクトディレクトリ配下にコピーする
cp -p ./scripts/compile.sh ./${DIR_NAME}
## ファイルを開く
code -r ./${DIR_NAME}/${FILE_NAME}