# IN
- ORで複数の条件式を繋ぐ必要がある場合には**IN**を使うとスッキリ書ける
    - 例：販売価格が100円、2300円、9800円の商品の名前と値段を取得する
    - ORを使った場合
    ```sql
    SELECT name, selling_price FROM Products
    WHERE selling_price = 100
    OR selling_price = 2300
    OR selling_price = 9800;
    ```

    - INを使った場合
    ```sql
    SELECT name, selling_price FROM Products
    WHERE selling_price IN(100,2300, 9800);
    ```

- 反対に、販売価格が100円、2300円、9800円**以外**の商品を選択したいときは、**NOT IN**を使う

    - 例；販売価格が100円、2300円、9800円**以外**の商品の名前と値段を取得する
    - NOT INを使った場合
    ```sql
    SELECT name, selling_price FROM Products
    WHERE selling_price NOT IN(100, 2300, 9800);
    ```

    - ORを使った場合
    ```sql
    SELECT name, selling_price FROM Products
    WHERE selling_price != 100
    OR selling_price != 2300
    OR selling_price != 9800;
    ```

- ポイント
    - IN(値1, 値2, ...)という形を覚えよう！！