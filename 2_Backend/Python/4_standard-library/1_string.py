from unicodedata import east_asian_width
# len：文字列の長さを取得
title = 'プロジェクト'
print(len(title)) # 6

# east_artisan_width(文字の種類を判別)
print(east_asian_width('あ')) # W
print(east_asian_width('A')) # Na

# 大文字と小文字の変換

data1 = 'Happy New Year'
data2 = 'happy birthday'

print(data1.lower()) # happy new year(全て小文字)
print(data1.upper()) # HAPPY NEW YEAR(全て大文字)
print(data1.swapcase()) # hAPPY nEW yEAR(大文字と小文字の反転)
print(data2.capitalize()) # Happy birthday(先頭大文字・その他小文字)
print(data2.title()) # Happy Birthday(単語の初めは大文字で後は小文字)


# 部分文字列
    # txt[start:end:step]
    # text: 文字列
    # index: インデックス
    # start: 開始位置
    # end: 終了位置
    # step: ステップ(増減)

title = 'あいうえおかきくけこ'

print(title[2]) # う
print(title[2:5]) # うえお
print(title[2:]) # うえおかきくけこ
print(title[:5]) # あいうえお
print(title[:]) # あいうえおかきくけこ
print(title[-7:-5]) # えお

# 文字の種別を判別する
    # isainum()：英数字であるか
    # isaipha()：英字であるか
    # isascii()：ASCII文字であるか
    # isdecimal()：10進数であるか
    # iscegit()：数値であるか
    # isnumeric()：数字文字であるか
    # isdentifier()：有効な識別子であるか
    # islower()：小文字であるか
    # isupper()：大文字であるか
    # istitle()：先頭だけ大文字であるか
    # isprintable()：印字可能な文字であるか
    # isspace()：空白文字であるか

# find/rfind

msg = 'にわにはにわにわとりがいる'

print(msg.find('にわ')) # 0
print(msg.find('にも')) # -1
print(msg.rfind('にわ')) # 6
print(msg.find('にわ', 3)) # 4
print(msg.find('にわ', 3, 5)) # -1
print(msg.find('にわ', -7, -1)) # 6


# 登場回数をカウントする
print(msg.count('にわ')) #3
print(msg.count('にわ', 3)) # 2
print(msg.count('にわ', 3, 6)) # 1


# 文字列の前後から空白を除去する
msg2 = '　　　　　こんにちは    '
print(msg2)
print('「'+ msg2.strip() + '」') # 「こんにちは」