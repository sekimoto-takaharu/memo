# CASE式
- 場合分け(条件分岐)を記述するには**CASE式**を使う
- CASE式には**単純CASE式**と**検索CASE式**がある
- 単純CASE式は検索CASE式によっても表現できるため、検索CASE式のみ扱う

    ```sql
    CASE WHEN <条件式> THEN <値・式>
        WHEN <条件式> THEN <値・式>
        ...
        ELSE <式・値>
    END
    ```

    - 例：セール時の価格を表示する(1000円以上は1割引き、5000円以上は2割引き)
    ```sql
    SELECT name,
        CASE WHEN selling_price >= 5000 THEN selling_price * 0.8
             WHEN selling_price >= 1000 THEN selling_price * 0.9
             ELSE selling_price
        END
    ```

    - SELECT句でnameカラムとCASE式がカンマで区切って書かれている
    CASE式はこれ自体が一つの「**式**」であるため、
    「5+2」や「3*4」などの式と同じように**単一の値を結果として返す**

    ---

    - WHEN句で書かれている条件式は上から順番に確認されていき、
    条件式を満たした地点で終了
    - 5000円以上は2割引きの記述を最初に書く必要がある
    - 満たした条件式の直後のTHEN句に書かれたCASE式の結果として返される

    ---

    - **ELSE**はその条件式も満たさないときに返す値・式を記述する
    - **END**は省略不可なので注意！**ELSE**は省略可能だが原則書く!

    ---
- 行列変換
    - 商品カテゴリごとの販売価格の合計を一行で取得する
    ```sql
    SELECT 
    SUM(CASE WHEN category = 'キッチン用品' THEN selling_price
            ELSE 0 END) AS "キッチン用品",
    SUM(CASE WHEN category = '事務用品'　THEN selling_price
            ELSE 0 END) AS "事務用品",
    SUM(CASE WHEN category = '衣類'　THEN selling_price
            ELSE 0 END) AS "衣類"
    FROM Products;
    ```
    - CASE式をSELECTの後に書くことで、３つのカラムを新たに生成している

- ポイント
    - CASE式は「式」であるため、式を書けるところならばどこでも書ける！
    - ELSEとENDを忘れずに！