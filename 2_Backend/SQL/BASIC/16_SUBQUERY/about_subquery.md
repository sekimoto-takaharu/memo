# サブクエリ
- ビュー定義のSELECT文をFROM句に書き込んだもの(使い捨てのビュー)
- ビューはSELECT文を名前を付けて保存するものだったが、サブクエリはSELECT文を保存せずに直接FROM句に書き込んで使う

    ```sql
    -- ビューの場合
        CREATE VIEW ProductSum(category, count_product)
        AS
        SELECT category, COUNT(*) FROM Products GROUP BY category;

        -- FROM句にビューを指定
        SELECT category, count_product FROM ProductSum;

    --サブクエリの場合
        SELECT category, count_product 
        FROM (SELECT category, COUNT(*) AS count_product FROM Products GROUP BY category) AS ProductSum;
    ```

- 実行の流れ
    - FROM句の中のSELEECT文が実行されて仮想的なテーブルが生成される
    - その後外側のSELECT文が実行されて仮想的なテーブルからレコードを取得

- サブクエリの使い所として、**集約関数を組み合わせた分析**がある

    - 例：商品分類ごとの個数の平均値を取得
    ```sql
    SELECT AVG(count_product)
    FROM (SELECT category, COUNT(*) AS count_product FROM Products GROUP BY category) AS ProductSum;
    ```

- サブクエリの中のFROM句にサブクエリを書く(階層を増やす)こともできるが、パフォーマンスが低下するため、あまり階層を増やさない方が良い

- ポイント
    - サブクエリは内側から順番に実行される！
    - サブクエリの名前は原則必要なことに注意！
    - 繰り返し使うSELECT文はビュー、一度きりのSELECT文はサブクエリで扱う！
    - サブクエリは集約関数を組み合わせた分析を可能にする