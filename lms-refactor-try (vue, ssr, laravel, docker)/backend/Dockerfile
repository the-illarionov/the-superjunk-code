FROM php:8.1.5-alpine

WORKDIR /var/www

RUN docker-php-ext-install  \
	pdo_mysql \
	bcmath

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ENTRYPOINT ["sh", "./wait-for.sh", "db:3306", "--", "./entrypoint.sh"]

EXPOSE 8080