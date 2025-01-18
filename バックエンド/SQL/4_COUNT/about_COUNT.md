# COUNT関数
- レコードの数を数えて表示する場合は**COUNT関数**を用いる
    ```sql
    SELECT COUNT(*) FROM テーブル名
    ```

    - 例：50歳以上の人数を取得する
    ```sql
    SELECT COUNT(*) FROM members WHERE age >= 50;
    ```
- COUNT関数のような集計に用いる関数を**集約関数**と呼ぶ
- 他に以下のような関数がある
    - SUM関数(合計を求める)
    - AVG関数(平均値)
    - MAX関数(最大値)
    - MIN関数(最小値)    

- カラム名に別名をつける
    - ASを使うと良い
    - 例：50歳以上の人数と名前をつける場合
    ```sql
    SELECT COUNT(*) AS "50歳以上の人数" FROM members WHERE age >= 50;
    ```
    - カラム名を日本語を使うときは、**ダブルクオーテーション**("囲まれる文字")を用いる

    - 例：測定日や測定者を表示する場合
    ```sql
    SELECT height / 100 AS height_m,
    '2018-04-01' AS "測定日",
    '吉田' AS "測定者"
    FROM members;
    ```
- ポイント
    - COUNT関数はSELECTの後に書く
    - WHEREを組み合わせると特定の条件を満たすレコード数をカウントできる!
    - ASでつける別名が日本語の時はダブルクオーテーションで囲う