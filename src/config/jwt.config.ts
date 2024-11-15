// jwt
export default () => ({
  jwt: {
    secretkey: 'you_secretkey',
    expiresin: '1h',
    refreshExpiresIn: '2h',
  },
});
