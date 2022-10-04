module.exports = {
  name: 'products-remote',
  exposes: {
    './Module': 'apps/products-remote/src/app/remote-entry/entry.module.ts',
  },
};
