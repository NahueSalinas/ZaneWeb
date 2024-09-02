function simpleMiddleware(req, res, done) {
    req.customProperty = 'This is a custom property';
    done();
  }