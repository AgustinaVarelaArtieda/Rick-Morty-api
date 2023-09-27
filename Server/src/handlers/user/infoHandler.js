const infoUser=require('../../controllers/users/infoUser')

const infoHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await infoUser(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error)
  }

};

module.exports = infoHandler