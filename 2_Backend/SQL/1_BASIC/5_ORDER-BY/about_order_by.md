# ORDER BY
- 並べ替えて表示させたい場合には、**ORDER BY**を用いる
    ```sql
    SELECT カラム名 FROM テーブル名 ORDER BY 並べ替えの基準となるカラム名;
    ```

    - 例：membersテーブルの名前(name)と年齢(age)を年齢の若い順に取得
    ```sql
    SELECT name, age FROM members ORDER BY age;
    ```

    - デフォルトは昇順(小さいもの→大きいもの)で取得されるが、降順(大きいもの→小さいもの)で取得することもできる

    - 例：membersテーブルの名前(name)と年齢(age)を年齢の高い順に取得
    ```sql
    SELECT name, age FROm members ORDER BY age DESC;
    ```

- **ORDER BY**で並べ替えをしていない場合、レコードの順番という概念はない
- そのため、id順に取得したい場合には、明示的に`ORDER BY id`と書く必要がある

- **ポイント**
    - 並べ替えの基準となるカラム名の後に昇順か降順かを指定できる!
    - ORDER BY句を使わない場合にはテーブルに順番という概念がない
    - 書き方は「SELECT→FROM→WHERE→ORDER BY」の順番！