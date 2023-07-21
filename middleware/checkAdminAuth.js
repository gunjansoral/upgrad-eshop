exports.checkAdminAuth = (req, res, next) => {
  const { email, password } = req.body;
  if (email === 'admin@upgrad.com' && password ===‘password’)
}