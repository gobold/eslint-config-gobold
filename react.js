module.exports = {
  'plugins': ['react'],
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-boolean-value': [0, 'never'],
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 1,
    'react/no-unknown-property': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
  }
};
