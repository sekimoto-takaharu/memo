# INSERT
- テーブルにレコードを追加するのに用いる命令文
    ```sql
    INSERT INTO テーブル名(カラム名1, カラム名2, ...)
    VALUES (値1, 値2, ...)
    ```
    - 例：membersテーブルのid=11に吉田さんを追加する
    ```sql
    INSERT INTO members(id, name, height, weight, age, job_id)
    VALUE (11, "吉田", 186.2, 97.1, 23, 5);
    ```
    - 指定しなかったカラムにはNULLが入る
- ポイント
    - INTOの後のカラム名とVALUESの後の値の数は合わせる！
    - 複数追加したい時は、カンマで区切れば複数のレコードを追加できる！
    - idは他と重複しないように設定する！
