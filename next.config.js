/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // styled-componentsの有効化
  compiler: 
    (() => {
      let compilerConfig = {
        // styledComponentsの有効化
        styledComponents: true,
      }
  
      if (process.env.NODE_ENV === 'production') {
        compilerConfig = {
          ...compilerConfig,
          // 本番環境ではReact Testing Libraryで使用するdata-testid属性を削除
          reactRemoveProperties: { properties: ['^data-testid$'] },
        }
      }
  
      return compilerConfig
    })(),
}

module.exports = nextConfig
