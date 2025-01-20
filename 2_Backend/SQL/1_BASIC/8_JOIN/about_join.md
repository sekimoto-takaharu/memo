# JOIN
## なぜそもそもテーブルを２つに分ける必要があるのか
    - データ容量が大きくなってしまう
    - 変更が生じた場合に変更する箇所が多くなる
    - **重複したデータ**がないように分割してテーブルを作成した上でやる方が良い

## JOIN句
- テーブルを結合するには、**JOIN**を用いる
    - 結合の種類には何種類かあるが、今回は**INNER JOIN**(**内部結合**)を用いる。
- 書き方
    ```sql
    SELECT カラム名 FROM テーブル名1 INNER JOIN テーブル名2 ON 結合の条件;
    ```

    - 例：membersテーブルのjob_idとjobsテーブルのidを紐づけて結合する
    ```sql
    SELECT * FROM members
    INNER JOIN jobs ON jobs.id = members.job_id;
    ```
    結合の条件は、jobsテーブルのidカラム(jobs.id)とmembersテーブルのjob_idカラム(members.job_id)を等しいものとして扱うという意味

    - 例：10人分の名前と年収をそれぞれ取得する
    ```sql
    SELECT members.name, jobs.salary FROM members
    INNER JOIN jobs ON jobs.id = members.job_id;
    ```

- ポイント
    - 複数のテーブルを結合して扱うときは、テーブル名.カラム名というように書く！
    - SELECT → FROM → JOIN → WHERE → GROUP BY → HAVING → ORDER BY