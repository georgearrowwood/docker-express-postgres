FROM node:8.8

WORKDIR /srv
COPY . .

RUN apt-get update
RUN apt-get -y install postgresql postgresql-contrib

RUN npm i -g nodemon

EXPOSE 7000 7000

CMD ./dev/wait_for_pg.sh && npm i && npm run server-watch
