import express from "express"
<<<<<<< HEAD

const router = express.Router();

router.get("/", (_, res) => {
    res.status(301);
    res.append("Location", "/quiz/questions");
    res.send("Redirecting to /quiz/questions");
})

const questions = [
    {
        text: "Aer Gabriel?",
        answer: ["Ja", "Nej", "Gabriel"],
        correct: "Gabriel",
        id: 0
    },
    {
        text: "Vad aer det foer lunch",
        answer: ["Pannkaka", "Pytt i Panna", "Some mat"],
        correct: "Pannkaka",
        id: 1
    },
]

router.get("/questions", (_, res) => {
    res.render("questions.njk", {
        message: "Questions",
        questions
    });
})

router.post("/answer", (req, res) => {
    let correct = 0

    let result = []
    const answers = req.body;
    questions.forEach(question => {
        const answer = answers[`q${question.id}`]
        result.push({
            question: question.text,
            answer: question.correct,
            correct: question.correct == answer,
        })
        correct++
    });

    res.render("answers.njk", {
        message: "Answers",
        points: correct,
        maxpoints: questions.length,
        results: result
    });
})



export default router;
=======
const router = express.Router()

router.get("/", (req, res) => {
  res.render("quiz.njk", {
    message: "Quiz"
    })
})

const questions = [
  {
    id: "q1",
    text: "Hur många hjul har en bil?",
    answers: [3, 12, 5, 4],
    correctAnswer: 4
  },
  {
    id: "q2",
    text: "Hur många ben har en gnu?",
    answers: ["två", "sju", "tre", "fyra"],
    correctAnswer: "fyra",
  }
]

router.get("/questions", (req, res) => {
  res.render("questions.njk", {
    message: "Frågor",
    questions
  })
})

router.post("/end", (req, res) => {
  const answers = req.body
  console.log(answers)
  const result = questions.map(question => {
    const answer = answers[question.id]
    return {
      question: question.text,
      answer,
      correct: answer == question.correctAnswer
    }
  })
  // questions.forEach(question => {
  //   const answer = answers[question.id]
  //   if (answer == question.correctAnswer) {
  //     console.log("Du har svarat rätt på fråga : ", question.id)
  //   }
  // })
  res.render("result.njk", {
    message: "Ditt resultat",
    result
  })
})
// rad 4 , 18, 19 i server.js

export default router

// kom ihåg i server.js
// import quizRouter from './routes/quiz.js'
// app.use("/quiz", quizRouter)
>>>>>>> a846c8407dcedb31061b52e84c6d298bc6d59b3f
