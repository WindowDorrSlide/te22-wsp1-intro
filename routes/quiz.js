import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.render("quiz.njk", {
    message: "Quiz"
    })
})

router.get("/questions", (req, res) => {
  const questions = [
    {
      text: "Hur många hjul har en bil?",
      answers: [3, 12, 5, 4],
      correctAnswer: 4
    },
    {
      text: "Hur många ben har en gnu?",
      answers: ["två", "sju", "tre", "fyra"],
      correctAnswer: "fyra",
    }
  ]
  res.render("questions.njk", {
    message: "Frågor",
    questions
  })
})

router.post("/end", (req, res) => {
  const answers = req.body
  console.log(answers)
  res.json(answers)
})

export default router

// kom ihåg i server.js
// import quizRouter from './routes/quiz.js'
// app.use("/quiz", quizRouter)