export const getDeckData = (_, decks, questions, answers, deckID) => {
    let currentDeck = _.find(decks, {id: deckID});
    let currentQuestions = _.filter(questions, {deckID: deckID});
    let mappedAnsersToQuestions = (
        _.map(currentQuestions,
            (question) => {
                let currentAnswers = _.filter(answers, {questionID: question.id})
                // console.log('currentAnswers: ', currentAnswers)
                return {
                    ...question,
                    answers: currentAnswers
                }
            }
        )
    )
    return {
        ...currentDeck,
        questions: mappedAnsersToQuestions
    }
}
