ls:
# コンテナ一覧確認コマンド
	docker ps -a
stats:
# Dockerの使っているリソース状態表示コマンド
	docker stats
logs:
# コンテナのログ表示コマンド
	docker logs vue
images:
# イメージ一覧表示コマンド
	docker images
rmi:
# イメージ削除コマンド
# make rmi ARG='xxxxxxxxxxxx'
	docker rmi ${ARG}
build:
# イメージビルドコマンド
	docker-compose build
up:
# コンテナ起動コマンド
	docker-compose up -d
down:
# コンテナ終了コマンド
	docker-compose down
exec:
# コンテナ実行(shellログイン)コマンド
	docker-compose exec vue sh