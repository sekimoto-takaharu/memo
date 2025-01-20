# 集合演算
## UNION
- レコードの足し算を行う
    - 例：ProductsテーブルとProducts2テーブルを行方向に足し合わせる
    ```sql
    SELECT id, name FROM Products
    UNION
    SELECT id, name FROM Products2;
    ```

    - UNIONはデフォルトでは、重複行を排除してレコードを足し合わせる
    - 重複行を排除しない場合は、**ALL**と言うキーワードを追加する

    - 例：ProductsテーブルとProducts2テーブルを行方向に足し合わせる(重複あり)
    ```sql
    SELECT id, name FROM Products
    UNION ALL
    SELECT id, name FROM Products2;
    ```

---

## INTERSECT
- 共通部分を取り出すときに使用する(MySQLは非対応)
    - 例：ProductsテーブルとProducts2テーブルの共通部分のみ取得
    ```sql
    SELECT id, name FROM Products
    INTERSECT
    SELECT id, name FROM Products2;
    ```

---

## EXCEPT
- レコードの引き算を行うにはEXCEPTを用いる(MySQlは非対応)
- 引き算特有の注意点として、**どちらからどちらを引くかによって結果が異なる**

    - 例：ProductsテーブルのレコードからProducts2テーブルのレコードを引いて取得
    ```sql
    SELECT id, name FROM Products
    EXCEPT
    SELECT id, name FROM Products2;
    ```
    - Productsテーブルにしかないものが残る

    --- 

    - 例：Products2テーブルのレコードからProductsテーブルのレコードを引いて取得
    ```sql
    SELECT id, name FROM Products2
    EXCEPT
    SELECT id, name FROM Products;
    ```
    - Products2テーブルのレコードにしかないものが残る