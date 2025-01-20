-- 定義部分
CREATE TABLE Products2
    (
        id     INTEGER NOT NULL,
        name   CHAR(32),
        category CHAR(32),
        selling_price INTEGER,
        cost_price INTEGER,
        registration_date DATE,
        PRIMARY KEY (id)
    )
;

-- 入力部分
INSERT
    INTO Products2(id, name, category, selling_price, cost_price, registration_date)
    VALUES
        (1, 'Tシャツ', '衣類', 1500, 500, '2018-04-05'),
        (2, 'ボールペン', '事務用品', 100, 30, '2018-06-03'),
        (3, '包丁', 'キッチン用品', 1200, 400, '2018-03-30'),
        (9, '手袋', '衣類', 800, 200, '2018-12-23'),
        (10, '封筒', '事務用品', 1000, 300, '2018-10-19')
;

-- 実行部分 
    -- ProductsテーブルとProducts2テーブルを行方向に足し合わせる
    SELECT id, name FROM Products
    UNION
    SELECT id, name FROM Products2;

    -- ProductsテーブルとProducts2テーブルを行方向に足し合わせる(重複あり)
    SELECT id, name FROM Products
    UNION ALL
    SELECT id, name FROM Products2;


    -- ProductsテーブルとProducts2テーブルの共通部分のみ取得
    SELECT id, name FROM Products
    INTERSECT
    SELECT id, name FROM Products2;


    -- ProductsテーブルのレコードからProducts2テーブルのレコードを引いて取得
    SELECT id, name FROM Products
    EXCEPT
    SELECT id, name FROM Products2;

    -- Products2テーブルのレコードからProductsテーブルのレコードを引いて取得
    SELECT id, name FROM Products2
    EXCEPT
    SELECT id, name FROM Products;