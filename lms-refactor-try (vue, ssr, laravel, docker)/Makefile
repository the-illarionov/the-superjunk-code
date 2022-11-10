# These variables can be overriden, e.g.: `make HOST=ilovecats.local up`
HOST=localhost
PORT=8080
DATABASE=lms
PASSWORD=super-secret-password-cia-pentagon-tom-cruise # It's a password for database root user

# These variables are internal, don't touch them
LMS_SCHEMA=http
LMS_NGINX_PORT=81
LMS_NGINX_CONFIG=site-http.conf

up-dev:
ifneq (, $(shell which mkcert))
	mkcert -install
	mkcert -cert-file ./_dev/nginx/ssl/${HOST}.pem -key-file ./_dev/nginx/ssl/${HOST}-key.pem ${HOST}
	$(eval LMS_SCHEMA=https)
	$(eval LMS_NGINX_PORT=443)
	$(eval LMS_NGINX_CONFIG=site-https.conf)
endif
	LMS_SCHEMA=${LMS_SCHEMA} \
	LMS_NGINX_PORT=${LMS_NGINX_PORT} \
	LMS_NGINX_CONFIG=${LMS_NGINX_CONFIG} \
	LMS_HOSTNAME=${HOST} \
	LMS_PORT=${PORT} \
	DB_DATABASE=${DATABASE} \
	DB_PASSWORD=${PASSWORD} \
	docker-compose -f ./_dev/docker-compose.yml up

down-dev:
	docker-compose -f ./_dev/docker-compose.yml down

up-prod:
	docker-compose -f ./_prod/docker-compose.yml up