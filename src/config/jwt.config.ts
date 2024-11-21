// jwt
export default () => ({
  jwt: {
    secretkey: 'heng_admin_server',
    expiresin: '1d',
    refreshExpiresIn: '2d',
  },
});
