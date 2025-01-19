# UPDATE
- テーブル内にあるデータの値を更新する命令文
    ```sql
    UPDATE テーブル名 SET カラムと値の指定;
    ```

    - 例：すべてのレコードのageカラムを30に変更する
    ```sql
    UPDATE members SET age = 30;
    ```
    - 「カラム = 値」という形で、変更するカラムと値を指定する
    - 特定のレコードのみを変更したい場合は、以下のように書く
    ```sql
    UPDATE テーブル名 SET カラムと値の指定 WHERE 条件式;
    ```

    - 例：佐藤さんの身長を172.1cmに変更する
    ```sql
    UPDATE members SET height = 172.1 WHERE id = 1;
    ```

    - 今入っている値から指定した数だけ増加させることもできる

    - 例：members全員の年齢を1歳増やす
    ```sql
    UPDATE members SET age = age + 1;
    ```

    - 例：鈴木さんの身長を1増やし、体重を10追加する
    ```sql
    UPDATE members SET height = height + 1, weight = weight + 10
    WHERE id = 2;
    ```

- ポイント
    - WHEREで条件式を指定しないと、更新内容がすべてのレコードに反映されてしまう。