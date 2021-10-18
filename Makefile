ls:
	docker ps -a
images:
	docker images
rmi:
# make rmi ARG='xxxxxxxxxxxx'
	docker rmi ${ARG}
build:
	docker-compose build
up:
	docker-compose up -d
down:
	docker-compose down
exec:
	docker-compose exec vue sh