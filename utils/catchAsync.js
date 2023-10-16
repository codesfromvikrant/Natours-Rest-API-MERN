module.export = catchAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);  // catch(next) is the same as next(err)
  }
}