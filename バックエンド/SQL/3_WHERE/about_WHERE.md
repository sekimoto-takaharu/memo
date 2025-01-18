# WHERE句

- 特定の条件を満たすレコード(行)のみを取得するには**WHERE**を用いる
    ```sql
    SELECT カラム名 FROM テーブル名 WHERE 条件式;
    ```

    - 例：身長が180cm以上の人の名前を取り出す
    ```sql
    SELECT name FROM members WHERE height >= 180;
    ```

    - 比較演算子
    ```sql
    -- aがbより大きい
    a > b
    
    -- bがaより大きい
    a < b

    -- aはb以上
    a >= b

    -- bはa以上
    a <= b

    -- bはaと等しい
    a = b

    -- aとbは等しくない
    a <> b
    ```

- 複数の条件を書くときは、ANDやORを繋げて書く
    - 条件式の**どちらも**満たしているレコードを取得するならば**AND**
    - 条件式の**どちらかを**満たしているレコードを取得しているならば**OR**で繋ぐ

    - 例：身長が170cm以上**かつ**体重が70kg以下の人を取得
    ```sql
    SELECT name FROM members WHERE height >= 170 AND weight <= 70;
    ```
    - 例：身長が180cm以上**または**160cm以下の人を取得
    ```sql
    SELECT name FROM members WHERE height >= 180 OR height <= 160;
    ```
    - ANDやORではなくカンマで区切ってしまうミスが発生しがちなので注意

- **ポイント**
    - WHEREの後に条件式を複数個書く場合は**ANDやOR**で繋げることを忘れずに！
    - 比較演算子は適切に使えるようしっかり覚えよう！
    - 書き順は**SELECT→FROM→WHERE**の順に書く！