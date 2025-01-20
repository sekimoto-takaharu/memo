# HAVING

## GROUP BYと条件式
- `GROUP BY`にはWHERE句で条件式を追加することができる
    - 例：身長が165cm以下の人の中でjob_idごとにグループ分けして人数をカウントする
    ```sql
    SELECT jpb_id, COUNT(*) FROM members
    WHERE height <= 165 GROUP BY job_id;
    ```
    - このように書くと、WHERE句の条件式でheightカラムの値が165cm以下のレコードのみに対して、job_idによるグループ化が行われる
    - WHERE句はGROUP BYよりも先に処理が行われるため、job_idでグループした後に対して、WHEREで条件を指定することはできない
    - グループ化したテーブルに対して条件を指定するには**HAVING**句を用いる

## HAVING句
- 書き方
    ```sql
    SELECT カラム名　FROM テーブル名
    GROUP BY 集約キー HAVING グループの値に対する条件式;
    ```

    - 例：job_idごとの人数を数えて2人いたjob_idだけを取得する
    ```sql
    SELECT job_id, COUNT(*) FROM members
    GROUP BY job_id HAVING COUNT(*) = 2
    ```

    - HAVING句は以下のものしか書くことができない
        - 定数
        - GROUP BY句で指定したカラム名(集約キー)
        - 集約関数

- ポイント
    - WHERE句：レコードに対する条件指定、
    - HAVING句→グループに対する条件指定である
    - 順番は、
    SELECT→ FROM → WHERE → GROUP BY → HAVING →　ORDER BY
    である