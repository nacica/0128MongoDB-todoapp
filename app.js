const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));

const PORT = 5000;

// app.get("/api/v1/tasks",(req,res)=>{
//     res.send("タスクを全て取得しました")
// }
// )

// //ルーティング設計
app.use("/api/v1/tasks", taskRoute);

//データベースと接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("サーバーが起動しました"));
    // app.listen(process.env.PORT || PORT, console.log("サーバーが起動しましたaaaaa"));
  } catch (err) {
    console.log(err);
  }
};

start();