module.exports = {
    extends: [
        'stylelint-config-standard',
    ],
    plugins: ['stylelint-order'],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
        indentation: 4,
        'property-no-vendor-prefix': null,
        'selector-max-compound-selectors': null,
        'value-no-vendor-prefix': null,
        'selector-max-id': null,
        'number-leading-zero': null,
        'selector-no-qualifying-type': null,
        'selector-class-pattern': null,
        'color-hex-length': 'long',
        'color-named': null,
        'selector-list-comma-newline-after': 'always-multi-line',
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': null,
        'block-no-empty': null,
        'max-nesting-depth': null,
        'no-empty-source': null,
        'no-descending-specificity': null,
        'at-rule-empty-line-before': null,
        'order/properties-alphabetical-order': null,
        'order/properties-order': [
            'content',
            'position',
            'top',
            'bottom',
            'right',
            'left',
            'display',
            'align-items',
            'justify-content',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bogttom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'font-size',
            'font-family',
            'font-weight',
            'text-align',
            'text-justify',
            'text-indent',
            'text-overflow',
            'text-decoration',
            'white-space',
            'color',
            'background',
            'background-position',
            'background-repeat',
            'background-size',
            'background-color',
            'background-clip',
            'border',
            'border-style',
            'border-width',
            'border-color',
            'border-top-style',
            'border-top-width',
            'border-top-color',
            'border-right-style',
            'border-right-width',
            'border-right-color',
            'border-bottom-style',
            'border-bottom-width',
            'border-bottom-color',
            'border-left-style',
            'border-left-width',
            'border-left-color',
            'border-radius',
            'opacity',
            'filter',
            'list-style',
            'outline',
            'visibility',
            'z-index',
            'box-shadow',
            'text-shadow',
            'resize',
            'transition',
        ],
    },
}
