# 新しいオオリューム領域を作成する
    docker volume create {ボリューム名}
    
#ボリューム領域一覧を表示
    docker volume ls

#指定したボリューム領域の詳細情報を表示する
    docker volume inspect {ボリューム名}

#指定したボリューム領域を削除する
    docker volume rm {ボリューム名}

    docker container run -v {vol名}:{コンテナ内絶対パス}{イメージ}

    docker container run --mount type=volume src={vol名}, dst={コンテナ内絶対パス{イメージ}}