# Full-stack node struct: From dabase with migrate to css reponsive ui
![Full stack source struct](https://github.com/thanhtai-personal/my-pratice/blob/main/my-practice-struct.jpg?raw=true)
# How to run:
to run database:\
  Create a .env file in /restApi folder with sample content:\

```
DATABASE_URL=postgres://<postgres user>:<password>@localhost:5432/<database name>
JWT_KEY=<your private jwt key>
SALT_PREFIX=10
DATABASE=<database name>
USER=<postgres user>
PASSWORD=<postgres password>
```

Run script:\
  create database: npm run create-dev-tables\
  migrate database: npm run migrate-tables\
  

to run server:\
  cd restApi\
  npm install\
  npm start\

to run client:\ 
  cd client\
  npm install\
  npm start\
