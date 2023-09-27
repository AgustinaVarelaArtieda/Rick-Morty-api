const {users, newUser}=require('../../controllers/users/users')

const usersHandler = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    if(!username){
      const result = await users(email, password);
      res.status(result.status).json(result.data);
    }else{
      const result = await newUser(email, password, username);
      res.status(result.status).json(result.data);
    }
  } catch (error) {
    res.status(400).json(error)
  }
};

module.exports = usersHandler