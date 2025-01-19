# GROUP BY
- テーブルをグループに切り分ける場合には、**GROUP BY**を使う
    ```sql
    SELECT カラム名　FROM GROUP BY 集約キー
    ```
    - 集約キーとは、どのようにテーブルを切り分けるかを指定する列
    - 集約キーとして指定したカラムが共通のもの同士でテーブルから切り分ける

    - 例：職種ごとの人数をカウントする
    ```sql
    SELECT job_id, COUNT(*) FROM members GROUP BY job_id;
    ```

    - GROUP BYを使わないときはCOUNT関数の結果が単一の値
        - テーブル全体を一つのグループとして集計しているため
    - GROUP BYを使ったときはCOUNT関数の結果が複数の値
        - テーブルを切り分けて複数のグループとしてそれぞれを集計しているため

- GROUP BYや集約関数を用いる際には**間違いやすいポイント**がいくつかある
    - GROUP BYとCOUNT関数のような集約関数を用いる際の制限
        - **GROUP BY句や集約関数を用いるときには、SELECT句に以下のいずれかしか書くことができない**
            ```
            - 定数
            - GROUP BY句で指定したカラム名
            - 集約関数
            ```
            - そのため以下のSELECT句を書くことはできない
            ```sql
            SELECT job_id, name FROM members GROUP BY job_id;
            ```
            - nameカラムがダメ！！！
        - **GROUP BY句におASで命名した別名した別名は指定できない**
            - SQLでは、SELECT句がGROUP BY句よりも後に実行されるため
        - **GROUP BY句に並び替えの機能はない**
            - 並び替えたい時は、明示的にORDER BY句を使う必要がある
- **ポイント**
    - GROUP BYは集計を行うときに使用する
    - GROUP BY句や集約関数を用いる際には以下の3つに注意!
        - SELECT句に書くことができるカラム名に制限があること
        - GROUP BY句にASで命名した別名は指定できない
        - GROUP BYに並び替えの機能なない
    - 順番は、「SELECT→FROM→WHERE→GROUP BY→ORDER BY」である
    
