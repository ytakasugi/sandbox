#!/bin/bash
## コンパイル対象
FILE_NAME=$1
TARGET_FILE=`basename ${FILE_NAME} .ts`

## 引数チェック
if [ $# -lt 1 ]; then
  echo "引数にコンパイル対象ファイルを指定してください。"
  exit 1
fi

# ファイル存在チェック
ls -1 ${FILE_NAME} > /dev/null 2>&1

if [ $? -ne 0 ]; then
  echo "対象ファイルが存在しません。"
  exit 1
fi

## 開始時間
START_TIME=`date "+%s"`

## コンパイル
echo "/*************************************"
echo "${FILE_NAME}をコンパイルします。"
echo "*************************************/"

tsc ${FILE_NAME}

END_TIME=`date "+%s"`
ELAPSED_TIME=$((END_TIME - START_TIME))
MM=$((ELAPSED_TIME / 60))
SS=$((ELAPSED_TIME % 60))

echo "/****************************************************"
echo "${FILE_NAME}のコンパイルに${MM}分${SS}秒かかりました。"
echo "****************************************************/"

echo "/*************************************"
echo "${TARGET_FILE}.jsを実行します。"
echo "*************************************/"

node ${TARGET_FILE}.js

echo "/*************************************"
echo "${TARGET_FILE}.jsを実行しました。"
echo "*************************************/"