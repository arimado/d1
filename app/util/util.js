import _ from 'lodash'

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


export const setValueOnEntities = (entities, filterProp, filter, value) => {

    console.log('fired');

    return entities.map((entity) => {
        if (entity[filterProp] === filter) {
            console.log('match found!')
            return Object.assign({}, entity, value)
        }
        return entity
    })
}
