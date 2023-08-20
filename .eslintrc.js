module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-tookie`
  extends: ['tookie'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
