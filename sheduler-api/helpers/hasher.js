module.exports = {
  passwordHasher: (bcrypt, pass) => {
    const salt_rounds = 11;

    return bcrypt.hash(pass, salt_rounds).then((data, err) => {
      if (err) {
        return null;
      }
      return data;
    });
  },
  passwordHashCompare: (bcrypt, hash, password) => {
    const salt_rounds = 11;
    return bcrypt.compare(password, hash).then((data, err) => {
      if (err) {
        return null;
      }
      return data;
    });
  },
  
};
