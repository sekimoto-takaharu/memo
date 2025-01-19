# DELETE
- テーブルの中にあるレコードを削除する
    ```sql
    DELETE FROM テーブル名
    ```

    - 例：membersテーブルのすべてのレコードを削除する
    ```sql
    DELETE FROM members;
    ```

    - 特定のレコードの身を削除するには、以下のようにWHEREで条件を指定する
    ```sql
    DELETE FROM テーブル名 WHERE 条件式;
    ```

    - 例：membersテーブルから,id=10の加藤さんを削除する
    ```sql
    DELETE FROM members WHERE id = 10;
    ```

    - 条件次第では複数のレコードを削除することも可能
    - 例：伊藤さん(id=6)よりidが大きい人のレコードを削除
    ```sql
    DELETE FROM members WHERE id > 6;
    ```
- ポイント
    - UPDATEと同様にWHEREで条件式を指定しないと、すべてのレコードが削除されてしまうので注意。
    - データを削除する際には、本当に削除していいのかを確認するなど身長に行うようにしよう！