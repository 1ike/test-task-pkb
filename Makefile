install:
	npm i

s:
	npx babel-node -- src/index.js

# d:
# 	npm run babel-node -- --inspect-brk src/bin/page-loader.js https://ru.hexlet.io/courses

# debug:
# 	DEBUG="page-loader:*" npm run babel-node --  src/bin/page-loader.js http://ya.ru

b:
	npm run build

test:
	npm run test

t:
	npm run test-watch

