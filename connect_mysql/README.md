# nodejs로 mysql 연동하기
> mysql의 데이터베이스에서 테이블 안의 값을 들고와서 출력하는 코드

## mysql 테이블 생성 및 테스트 데이터 삽입
```bash
CREATE DATABASE my_database;

USE my_database;

CREATE TABLE Users (
	id VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO Users (id, password)
VALUES ('test', '1234');

SELECT * FROM Users;
```

## 'ER_NOT_SUPPORTED_AUTH_MODE' 에러 발생시
```bash
ALTER USER '<my_sql_id>'@'localhost' IDENTIFIED WITH mysql_native_password BY '<my_sql_pswd>';
FLUSH PRIVILEGES;
```
