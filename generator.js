module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      dev: 'vue-cli-service serve',
      build: 'vue-cli-service build',
      lint: 'vue-cli-service lint',
    },
    dependencies: {
      axios: '^0.21.1',
      'body-scroll-lock': '^3.1.5',
      'core-js': '^3.9.0',
      lodash: '^4.17.20',
      vue: '^2.6.12',
      'vue-router': '^3.5.1',
      vuex: '^3.6.2',
    },
    devDependencies: {
      '@vue/cli-plugin-babel': '~4.5.11',
      '@vue/cli-plugin-eslint': '~4.5.11',
      '@vue/cli-plugin-router': '~4.5.11',
      '@vue/cli-plugin-vuex': '~4.5.11',
      '@vue/cli-service': '~4.5.11',
      '@vue/eslint-config-standard': '^6.0.0',
      'babel-eslint': '^10.1.0',
      eslint: '^7.20.0',
      'eslint-plugin-import': '^2.22.1',
      'eslint-plugin-node': '^11.1.0',
      'eslint-plugin-promise': '^4.3.1',
      'eslint-plugin-standard': '^5.0.0',
      'eslint-plugin-vue': '^7.6.0',
      'lint-staged': '^10.5.4',
      'prerender-spa-plugin': '^3.4.0',
      sass: '^1.32.8',
      'sass-loader': '10.1.1',
      'sass-resources-loader': '^2.1.1',
      stylelint: '^13.11.0',
      'stylelint-config-standard': '^20.0.0',
      'stylelint-order': '^4.1.0',
      'stylelint-webpack-plugin': '^2.1.1',
      'svg-sprite-loader': '^5.2.1',
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
