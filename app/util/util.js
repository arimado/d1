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


export const randomNumber = () => {
    return Math.floor(Math.random() * 200 + (Date.now() / 2))
}

export const randomAge = () => {
    return Math.floor(18 + Math.random() * 30)
}

export const randomName = () => {
    const names = ['Lyndon', 'Jestine', 'Maryam', 'Herlinda', 'Leda', 'Tera', 'Hyon', 'Lonny', 'Jeanie', 'Leeanne', 'Toshia', 'Lanell', 'Federico', 'Maryellen', 'Juliette', 'Brooks', 'Sima', 'Iesha', 'Li', 'Laura', 'Georgianna', 'Ana', 'Jeniffer', 'Classie', 'Jc', 'Tyrone', 'Hai', 'Mana', 'Madeleine', 'Marchelle', 'Irwin', 'Ophelia', 'Lavone', 'Jeanine', 'Edwardo', 'Noah', 'Dodie', 'Hsiu', 'Velia', 'Jamison', 'Latrina', 'Dagmar', 'Xavier', 'Alden', 'Beulah', 'Vania', 'Rickey', 'Joellen', 'Keitha', 'Debrah',  
    ]
    
    return names[Math.floor(Math.random() * names.length)]
}
