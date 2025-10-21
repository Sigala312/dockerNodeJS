# 1. 使用官方的 Node.js 環境（版本 22）

FROM node:22

# 2. 建立一個工作目錄，叫 /app

WORKDIR /app

# 3. 先複製 package.json & lock（這樣做可以利用 cache）

COPY package*.json ./

# 4. 安裝所有 npm 套件（會裝 express、mysql2、nodemon 等）

RUN npm install

# 5. 把你的所有程式碼複製進容器 (要部屬了才包進去，如果只是要有環境的殼可先不抓)

# COPY . .

# 6. 對外開放 3000 port（讓外部可以連進來）

EXPOSE 3000

# 7. 啟動方式：用 nodemon 開發模式啟動