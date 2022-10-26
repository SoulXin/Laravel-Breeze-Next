
build:
	cd container && docker compose build

setup:
	docker volume create --name=backend-mysql-data
	cd container && docker compose -p backend-container up -d
	
destroy:
	cd container && docker compose -p backend-container down

create-db:
	docker exec -i mariadb-backend sh -c "exec mysql -uroot -proot" < container/mysql/database.sql

init:
	docker exec -ti backend make _init

_init:
	composer install
	cp .env.example .env
	php artisan key:generate
	php artisan migrate
	php artisan db:seed