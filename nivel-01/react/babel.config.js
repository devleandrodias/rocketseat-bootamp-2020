/**
 * Presets: São conjuntos de configurações criadas por terceiros
 *
 * @babel/preset-env, convert javascript para um javascript mais antigo e
 * converter apenas funcionalida que os navegadores ainda não entendem (env (Ambiente))
 *
 * @babel/preset-react adicona as funcionalidade do react pra transpilação
 */
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-transform-runtime"],
};
