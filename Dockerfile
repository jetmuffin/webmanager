FROM dockerfile/nodejs

RUN npm install -g bower gulp

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN bower install
RUN gulp

RUN gulp serve
