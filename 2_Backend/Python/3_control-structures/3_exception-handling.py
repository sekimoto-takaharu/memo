#例外処理(try命令)
try:
    num = input('数字を入力してください：')
    print('２倍すると...', float(num) * 2)
except ValueError as ex:
    print('エラー発生：', ex)