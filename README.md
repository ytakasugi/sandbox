# sandbox

## awkコマンド

- Sites
  - [awkの魅力を伝える: 「合計・平均・階差などを取得」](https://zenn.dev/nutmeg/articles/awk_charm_02)
  - [awkで列の合計を求める](https://orebibou.com/ja/home/201606/20160613_001/)
  - [第3回 同じ行がいくつあるかカウントする(awk+sort+uniq)](https://www.soum.co.jp/misc/awk/3/)

- csv

```csv
1,客先,バス,公園前,HOGE駅南口,1,345
1,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
4,客先,バス,公園前,HOGE駅南口,1,345
4,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
5,客先,バス,公園前,HOGE駅南口,1,345
5,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
6,客先,バス,公園前,HOGE駅南口,1,345
6,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
7,客先,バス,公園前,HOGE駅南口,1,345
7,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
11,客先,バス,公園前,HOGE駅南口,1,345
11,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
13,客先,バス,公園前,HOGE駅南口,1,345
13,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
18,客先,バス,公園前,HOGE駅南口,1,345
18,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
19,客先,バス,公園前,HOGE駅南口,1,345
19,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
24,客先,バス,公園前,HOGE駅南口,1,345
24,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
27,客先,バス,公園前,HOGE駅南口,1,345
27,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
31,客先,バス,公園前,HOGE駅南口,1,345
31,客先,電車,FUGA線HOGE駅,PIYO駅,1,1234
```

- コマンド

```
$ cat sample.csv | awk -F, '{print $3}' | sort | uniq -c | sort -n
     12 バス
     12 電車
$ cat sample.csv | awk -F, '{a[$3]+=$7} END{for(k in a) print k, a[k];}' | sort
バス 4140
電車 14808
$ cat sample.csv | awk -F, '{sum+=$7} END{print sum}'
18948
```
