# history

## single-spa 프로젝트 추가
create-single-spa single-spa-layout \
--dir poc-single-spa-layout \
--framework react \
--packageManager npm \
--orgName poc \
--appName single-spa-layout \
--moduleType root-config \
--layout

create-single-spa single-spa-layout-comp \
--dir poc-single-spa-layout-comp \
--framework react \
--packageManager npm \
--orgName poc \
--appName single-spa-layout-comp \
--moduleType app-parcel \
--layout

create-single-spa  single-spa-nexacro-adapter \
--dir poc-single-spa-nexacro-adapter \
--framework react \
--packageManager npm \
--orgName poc \
--appName single-spa-nexacro-adapter \
--moduleType app-parcel \
--layout

## nexacro project 추가
nexacro studio로 생성

## tailwindcss 추가
npm install autoprefixer postcss postcss-loader tailwindcss
tailwind.config.js, postcss.config.js, tailwind.css 파일 복사 
index.js에 import './tailwind.css'; 코드 추가
webpack.config.js 에 postcss-loader 코드 추가

# 실행
