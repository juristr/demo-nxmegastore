module.exports = {
  name: 'myaccount-remote',
  exposes: {
    './Module': 'apps/myaccount-remote/src/app/remote-entry/entry.module.ts',
  },
};
