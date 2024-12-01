import User from '../models/userModl.js';
import bcrypt from 'bcrypt';

export default async (req, res, next) => {
  //Check for basic auth header

  if (
    !req.headers.authorization ||
    req.headers.authorization?.indexOf('Basic') === -1
  ) {
    return res.status(401).json({ message: 'Invalid authorization header' });
  }

  // verify basic auth
  const base64Credentials = req.headers.authorization.split(' ')[1];

  const credetials = Buffer.from(base64Credentials, 'base64').toString('ascii');

  const [email, password] = credetials.split(':');

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ massage: 'User not found' });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(404).json({ massage: 'Invalid password or email' });
  }

  // attach user to request object

  req.user = user._doc;

  next();
};
