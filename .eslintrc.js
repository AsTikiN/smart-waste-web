module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  ignorePatterns: [".husky/**", "out/**", "build/**"],
  "rules": {
    "react/jsx-filename-extension": [1, {
      extensions: [".ts", ".tsx", ".jsx"]
    }],
    "import/extensions": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-props-no-spreading": ["error", {
      custom: "ignore"
    }],
    "prettier/prettier": ["error", {
      endOfLine: "auto"
    }],
    "react/no-unescaped-entities": "off",
    "import/no-cycle": [0, {
      ignoreExternal: true
    }],
    "prefer-const": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-useless-escape": "off",
    "no-underscore-dangle": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "off",
    "class-methods-use-this": "off",
    "no-shadow": "off",
    'import/prefer-default-export': "off",
    "camelcase": "off",
    "@typescript-eslint/no-var-requires": "off",
    "global-require": "off",
    "radix": "off",
    "arrow-body-style": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"]
      }
    }
  }
};