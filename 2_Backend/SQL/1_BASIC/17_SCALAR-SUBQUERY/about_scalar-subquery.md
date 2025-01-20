# スカラサブクエリ
- 取得する値が単一の値(スカラ)になるサブクエリのこと

---

- 先ほど見たサブクエリは、複数の値(テーブル)を取得していたが、「3」とか「Yシャツ」のような単一を取得するサブクエリを、特にスカラサブクエリと呼ぶ
    ```sql
    SELECT name, selling_price FROM Products
    WHERE selling_price > (SELECT AVG(selling_price) FROM Products);
    ```
    - SELECT AVG(selling_price) FROM ProductsはProductsテーブルの販売価格の平均値である2678.7500という単一の値を取得するので、スカラサブクエリである。

    - よって、以下のクエリを発行していることと同じ意味になる。
    ```sql
    SELECT name, selling_price FROM Products
    WHERE selling_price > 2678.7500;
    ```

    - スカラサブクエリは単一の値(スカラ値)を取得するので、スカラ値を記入できる箇所ならどこでもスカラサブクエリを書くことが出来る。

- AVG関数のような集約関数はWHERE句に書くことができないため、以下の書き方はできない
    ```sql
    SELECT name, selling_price FROM Products
    WHERE selling_price > AVG(selling_price);
    ```

- ポイント
    - 単一の値を返すサブクエリをスカラサブクエリと呼ぶ！
    - スカラサブクエリはスカラ値として扱うことができる！
    - スカラ値を書くことのできるところにはどこでも書くことができる！