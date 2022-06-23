FROM node:slim

ENV CMS_DNS_A=hkfdsh.fans

RUN mkdir /app
WORKDIR /app
ADD app.tgz .

CMD ["node", "/app/index.js"]
