module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      dev: 'vue-cli-service serve',
      build: 'vue-cli-service build',
      lint: 'vue-cli-service lint',
    },
    dependencies: {
      axios: '^0.20.0',
      'core-js': '^3.6.5',
      lodash: '^4.17.20',
      vue: '^2.6.12',
      'vue-router': '^3.4.3',
      vuex: '^3.5.1',
    },
    devDependencies: {
      '@vue/cli-plugin-babel': '~4.5.4',
      '@vue/cli-plugin-eslint': '~4.5.4',
      '@vue/cli-plugin-router': '~4.5.4',
      '@vue/cli-plugin-vuex': '~4.5.4',
      '@vue/cli-service': '~4.5.4',
      '@vue/eslint-config-standard': '^5.1.2',
      'babel-eslint': '^10.1.0',
      eslint: '^7.8.1',
      'eslint-plugin-import': '^2.22.0',
      'eslint-plugin-node': '^11.1.0',
      'eslint-plugin-promise': '^4.2.1',
      'eslint-plugin-standard': '^4.0.1',
      'eslint-plugin-vue': '^6.2.2',
      'lint-staged': '^10.3.0',
      'node-sass': '^4.14.1',
      'prerender-spa-plugin': '^3.4.0',
      'sass-loader': '^10.0.2',
      'sass-resources-loader': '^2.1.0',
      stylelint: '^13.7.0',
      'stylelint-config-standard': '^20.0.0',
      'stylelint-order': '^4.1.0',
      'stylelint-webpack-plugin': '^2.1.0',
      'svg-sprite-loader': '^5.0.0',
      'vue-meta': '^2.4.0',
      'vue-template-compiler': '^2.6.12',
    },
    gitHooks: {
      'pre-commit': 'lint-staged',
    },
    'lint-staged': {
      '*.{js,jsx,vue}': ['vue-cli-service lint', 'git add'],
    },
  })
  api.render('./template')
}
