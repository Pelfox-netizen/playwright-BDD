module.exports = {
  default: {
    require: ['features/support/**/*.ts', 'features/steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
};
