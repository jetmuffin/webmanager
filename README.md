# webmanager

WebManager is a web-based interface for system administration for high-performance computing cluster.

## Prerequisities

- node (>= 5.0)
- gulp
- bower

## Build Projects

First, **fork** this repo and clone code from github.

```
$ git clone git@github.com:<your_github_username>/webmanager.git
```

Then, install the dependencies.

```
$ npm install -g gulp bower
$ npm install
$ bower install
```

Build projects using gulp.

```
$ gulp
```

And the last step, run server and coding. The server will listen to port `3000` by default, open your browser and visit `http://localhost:3000`. 

```
$ gulp serve
```

## Authors

- JetMuffin
- Konnase

## License

MIT License
