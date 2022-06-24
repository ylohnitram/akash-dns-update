FROM node:slim

ENV CMS_DNS_A=hkfdsh.fans

RUN mkdir /app
WORKDIR /app
ADD app.tgz .

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
