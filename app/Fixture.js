const Fixture = {
    users: [
        {
            username: 'Jeremy',
            id: '1',
        }
    ],
    decks: [
        {
                 id: '1',
            user_id: '1',
          questions: [
              {
                 question: 'Jon Snow or Rob Stark',
                 answers: [
                    "Jon Snow",
                    "Rob Stark"
                 ]
             },
             {
                question: 'Political Party',
                answers: [
                   "Greens",
                   "Labor",
                   "Liberal"
                ]
             }
          ],
        }
    ],
    chats: [
        {}
    ],
    matches: [
        {}
    ]
}

export default Fixture
