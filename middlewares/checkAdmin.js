export default async (req, res, next) => {

  try {
    if (!req.user) {
      return res.status(404).send({ massage: 'User not found' })
    }

    if (req.user.role !== 'admin') {
      return res.status(500).json({ massage: 'Access denined' });
    };




    next();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.massage });
  }
}