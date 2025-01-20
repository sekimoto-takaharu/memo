CREATE TABLE Products
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
    INTO Products(id, name, category, selling_price, cost_price, registration_date)
    VALUES
        (1, 'Tシャツ', '衣類', 1500, 500, '2018-04-05'),
        (2, 'ボールペン', '事務用品', 100, 30, '2018-06-03'),
        (3, '包丁', 'キッチン用品', 1200, 400, '2018-03-30'),
        (4, 'Yシャツ', '衣類', 2300, 300, '2018-07-23'),
        (5, 'コピー用紙', '事務用品', 500, 200, '2018-02-19'),
        (6, '圧力鍋', 'キッチン用品', 5900, 2000, '2018-11-26'),
        (7, 'カッター', '事務用品', 130, 50, '2018-05-11'),
        (8, 'プリンター', '事務用品', 9800, 2800, '2019-01-12')
;

-- 実行部分
    -- セール時の価格を表示する(1000円以上は1割引き、5000円以上は2割引き)
    SELECT name,
    CASE WHEN selling_price >= 5000 THEN selling_price * 0.8
            WHEN selling_price >= 1000 THEN selling_price * 0.9
            ELSE selling_price
    END