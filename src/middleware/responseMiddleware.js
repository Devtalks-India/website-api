const response = (req, res, next) => {
  res.api = function ($res) {
    return res.json({
      status: 'success',
      data: $res
    });
  }

  res.error = function ($res) {
    return res.json({
      status: 'error',
      data: $res
    });
  }
  next();
};


module.exports = response;
