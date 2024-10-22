import express from "express"

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
