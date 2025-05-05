# while文(条件式がtrueの間だけ繰り返す)
i = 1
while i < 6:
    print(i,'番目のループです。')
    i += 1

# for文(リストの内容を順に処理をする)
data = ['うめ', 'さくら', 'もも']

for value in data: 
    print(value)

for i in range(1, 6): # 範囲指定
    print(i, '番目のループです。')

# リストの複製
data = [15, 43, 7, 59, 98]
data2 = [i * 2 for i in data]
print(data2)

# ループの制御(break文)
sum = 0

for i in range(1, 101):
    sum += i
    if sum > 1000:
        break

print('合計が1000を超えるのは、1~', i, 'を加算しときです。')

# 周回をスキップする
sum = 0

for i in range(1, 101):
    if i % 2 != 0:
        continue
    sum += i
print('合計値は', sum, 'です。')