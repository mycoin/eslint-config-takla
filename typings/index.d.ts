declare const _default: {
    extends: string[];
    plugins: string[];
    parserOptions: {
        ecmaVersion: number;
        sourceType: string;
        ecmaFeatures: {
            jsx: boolean;
        };
    };
    env: {
        browser: boolean;
        node: boolean;
        jest: boolean;
        es6: boolean;
    };
    settings: {
        'import/resolver': {
            alias: {
                map: string[][];
                extensions: string[];
            };
        };
    };
    rules: {
        'import/no-unresolved': (number | {
            ignore: string[];
        })[];
        'arrow-body-style': number;
        'func-names': number;
        'max-len': (string | {
            code: number;
        })[];
        'class-methods-use-this': number;
        'jsx-a11y/anchor-is-valid': number;
        'jsx-a11y/iframe-has-title': number;
        'no-else-return': number;
        'no-param-reassign': number;
        'no-plusplus': number;
        'no-nested-ternary': number;
        'no-unstable-nested-components': number;
        'no-restricted-globals': number;
        'object-curly-newline': number;
        'operator-linebreak': number;
        'prefer-arrow-callback': number;
        'prefer-destructuring': number;
        'prefer-template': number;
        'quote-props': string[];
        semi: string[];
        'newline-per-chained-call': (string | {
            ignoreChainWithDepth: number;
        })[];
        'jsx-a11y/no-static-element-interactions': number;
        'jsx-a11y/click-events-have-key-events': number;
        'react/function-component-definition': number;
        'react/destructuring-assignment': number;
        'react/forbid-prop-types': number;
        'react/jsx-wrap-multilines': number;
        'react/jsx-closing-bracket-location': number;
        'react/jsx-indent': string;
        'react/jsx-newline': number;
        'react/jsx-props-no-spreading': number;
        'react/jsx-one-expression-per-line': number;
        'react/no-deprecated': number;
        'react/no-unused-class-component-methods': number;
        'react/no-unstable-nested-components': number;
        'react/prefer-stateless-function': number;
        'react/prop-types': number;
        'react/require-default-props': number;
        'react/require-extension': number;
        'react/sort-comp': number;
        'semi-style': string[];
    };
};
export default _default;
