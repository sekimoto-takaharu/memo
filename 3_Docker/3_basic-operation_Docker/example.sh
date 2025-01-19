# Dockerの基本的なガイドが分かる
docker

# イメージ系
    ## イメージをダウンロードする
    docker image pull {イメージ名}:{タグ名} #タグ名を指定しないとlatestが選択される

    ## ローカルマシンに存在するイメージの一覧を表示するコマンド 
    docker image ls

    ## ローカルにあるイメージを破棄する
    docker image rm {イメージ名}:{タグ名} #タグ名を指定しないとlatestが選択される
    docker image rm {イメージID}


# コンテナ系
    ## コンテナを作成する
    docker container run {イメージ名}

    ## ローカルマシンで起動しているコンテナの一覧を表示するコマンド
    docker container ls

    ## ローカルマシンに存在するすべてのコンテナの一覧を表示するコマンド
    docker container ls -a

    ## コンテナを停止する
    docker container stop {コンテナ名}
    docker coontainer stop {コンテナID}

    ## コンテナを再起動する
    docker container restart {コンテナ名}

    ## コンテナを破棄する
    docker container rm {コンテナ名}
    docker container rm {コンテナID}