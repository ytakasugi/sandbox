# sandbox

## awkコマンド

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
p$ cat sample.csv | awk -F, '{sum+=$7} END{print sum}'
18948
```
