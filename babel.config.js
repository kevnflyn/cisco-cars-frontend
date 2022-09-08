module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env', // https://babeljs.io/docs/en/babel-preset-env
      {
        // use browserlist configs by default
        // https://github.com/browserslist/browserslist#queries
        // unless targets or ignoreBrowserlistConfig set
        useBuiltIns: 'entry',
        targets: ['last 1 version', '> 0.5%', 'not dead', 'Firefox ESR'] // 'defaults'
      }
    ],
    '@babel/preset-react' // https://babeljs.io/docs/en/babel-preset-react
  ]
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime'
  ]

  // a dynamic configuration based on the process environment
  // if (process.env["ENV"] === "prod") {
  //   plugins.push(...);
  // }

  return {
    presets,
    plugins
  }
}
