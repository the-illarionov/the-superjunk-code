#!/bin/sh
set -eu

composer install

php artisan config:cache

FIRST_TIME=$(php artisan migrate:status | grep "not found" | wc -l)
if [ $FIRST_TIME = "1" ];
then
	php artisan migrate --seed
fi

php artisan serve --host 0.0.0.0 --port=9000