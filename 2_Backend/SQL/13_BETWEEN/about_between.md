# BETWEEN
- **範囲検索**を行うには**BETWEEN**を使う
- 範囲検索は上限と値を設定した検索
    - 例：販売価格が500円から2000円までの商品名を取得(両端の値を含む)
    ```sql
    SELECT name, selling_price FROM Products
    WHERE selling_price BETWEEN 500 AND 2000;
    ```

    - 比較演算子で同様のものを書くことはできるが、長くなる
    ```sql
    SELECT name, sale_price FROM Products
    WHERE selling_price >= 500 AND selling_price <= 2000;
    ``` 

- ポイント
    - ANDを忘れずに書く！
    - BETWEENを使うと上限と下限の値が含まれることに注意！