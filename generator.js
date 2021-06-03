module.exports = (api, options) => {
    api.extendPackage({
        scripts: {
            dev: 'vue-cli-service serve',
            build: 'vue-cli-service build',
            lint: 'vue-cli-service lint',
        },
        dependencies: {
            '@vue/composition-api': '^1.0.0-rc.10',
            axios: '^0.21.1',
            'body-scroll-lock': '^3.1.5',
            'core-js': '^3.13.1',
            'detect-browser': '^5.2.0',
            imagesloaded: '^4.1.4',
            lodash: '^4.17.21',
            vue: '^2.6.13',
            'vue-lazyload': '^1.3.3',
            'vue-router': '^3.5.1',
            vuex: '^3.6.2',
            webfontloader: '^1.6.28',
        },
        devDependencies: {
            '@vue/cli-plugin-babel': '~4.5.13',
            '@vue/cli-plugin-eslint': '~4.5.13',
            '@vue/cli-plugin-router': '~4.5.13',
            '@vue/cli-plugin-vuex': '~4.5.13',
            '@vue/cli-service': '~4.5.13',
            '@vue/eslint-config-standard': '^6.0.0',
            'babel-eslint': '^10.1.0',
            eslint: '^7.27.0',
            'eslint-plugin-import': '^2.23.4',
            'eslint-plugin-node': '^11.1.0',
            'eslint-plugin-promise': '^5.1.0',
            'eslint-plugin-standard': '^5.0.0',
            'eslint-plugin-vue': '^7.10.0',
            'lint-staged': '^11.0.0',
            'prerender-spa-plugin': '^3.4.0',
            sass: '^1.32.11',
            'sass-loader': '^10.2.0',
            'sass-resources-loader': '^2.2.1',
            stylelint: '^13.13.1',
            'stylelint-config-standard': '^22.0.0',
            'stylelint-order': '^4.1.0',
            'stylelint-webpack-plugin': '^2.1.1',
            'svg-sprite-loader': '^6.0.7',
            'vue-meta': '^2.4.0',
            'vue-template-compiler': '^2.6.13',
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
