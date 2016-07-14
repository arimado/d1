import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#F5FCFF',
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    statusBarBg: {
        height: 20,

    },

    // NAV BAR STYLES -------------------------------------

    navBar: {
        flexDirection: 'row',
        marginBottom: 20
    },
    createDeckButton: {
        flex: 1,
        backgroundColor: '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },

    // MODAL -------------------------------------

    modalMessage: {

    },

    modalButton: {

    },

    // LOGIN PAGE ----------------------------------------

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    // INDEX PAGE ----------------------------------------

    deck: {
      flex: 1,
      padding: 20,
      height: 400,
      width: 300,
      backgroundColor: '#CCCCCC',
    },

    deckText: {
        fontSize: 26,
        marginBottom: 10
    },

    deckAnswer: {
        fontSize: 17,
        backgroundColor: 'grey',
        color: 'white',
        padding: 20,
        marginBottom: 10,

    },

    deckAnswerSelected: {
        backgroundColor: '#4d4d4d'
    },

    // SHOW DECK --------------------------------------

    deckContainer: {
        flex: 1,
        backgroundColor: '#CCCCCC'
    },

    deckScrollView: {
        padding: 25,
        paddingBottom: 100
    },

    deckProfile: {
        flexDirection: 'row',
        marginBottom: 25
    },

    profileName: {
        fontSize: 28,
        flex: 1
    },

    deckClose: {

    },

    deckBG: {
         flex: 1,
    },

    finishDeckButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#437545',
        padding: 20,
        marginBottom: 100,
    },

    finishDeckButton: {

    },

    // CREATE PAGE -----------------------------------

    deckProfileCreate: {
        marginBottom: 5
    },

    createContainer: {
        flex: 1,
        paddingBottom: 500,
        padding: 20
    },

    colorsContainer: {
        flexDirection: 'row'

    },

    colorRadio: {
        flex: 1,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },

    answerContainer: {
         flex: 1,
         flexDirection: 'row'
    },

    answerInput: {
        flex: 1,
    },

    answerCheck: {
        paddingTop: 12,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 0,
        height: 55,
        backgroundColor: 'grey'
    },

    answerCheckCorrect: {
        backgroundColor: 'green'
    },

    // FORMS --------------------------------------

    label: {
        marginBottom: 10
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
    },
    input: {
        backgroundColor: "#dfdfdf",
        height: 70,
        padding: 10,
        marginBottom: 10
    },
    buttons: {
        flexDirection: 'row'
    },

    buttonContainer: {
        backgroundColor: '#CCCCCC',
        flex: 1,
        width: 300,
        padding: 20,
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },

    button: {
        flex: 1
    },


});

export default Styles;
