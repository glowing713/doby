import dotenv from "dotenv";
import express, { response } from "express";
import logger from "morgan";

dotenv.config(); // 현재 directory 내의 .env 파일을 인식해서 환경변수를 설정해준다.
const app = express();
const port = process.env.PORT || 4000;

// morgan logger 실행
app.use(logger("dev"));
// get 메소드를 사용하여 엔드포인트 작성
app.get("/", (request, response) => {
  response.json({
    name: "sean",
    status: "test",
    feel: "yaaaaaay",
    hunger: "quite hungry",
  });
});

app.listen(port, () => {
  console.log(`🥳 Server is listening at http://localhost:${port}`);
});
