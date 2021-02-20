import dotenv from "dotenv";
import express, { response } from "express";
import logger from "morgan";

dotenv.config(); // 현재 directory 내의 .env 파일을 인식해서 환경변수를 설정해준다.
const app = express();
const port = process.env.PORT || 4000;
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// morgan logger 실행
app.use(logger("dev"));
// get 메소드를 사용하여 엔드포인트 작성
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("ID was not found");
  res.send(course);
});

app.listen(port, () => {
  console.log(`🥳 Server is listening at http://localhost:${port}`);
});
