import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({

    // COLOR ------------------------------------------------

    // ORANGE

    orangeShadeVeryDarkTXT: {
        color: '#7F6026'
    },
    orangeShadeDarkTXT: {
        color: '#CC8500'
    },
    orangeShadeMediumTXT: {
        color: '#FFA600'
    },
    orangeShadeLightTXT: {
        color: '#FFC14C'
    },
    orangeShadeVeryLightTXT: {
    },

    orangeShadeVeryDarkBG: {
        backgroundColor: '#7F6026'
    },
    orangeShadeDarkBG: {
        backgroundColor: '#CC8500'
    },
    orangeShadeMediumBG: {
        backgroundColor: '#FFA600'
    },
    orangeShadeLightBG: {
        backgroundColor: '#FFC14C'
    },
    orangeShadeVeryLightBG: {
    },

    // BLUE

    blueShadeVeryDarkTXT: {
        color: '#0A4B7F'
    },
    blueShadeDarkTXT: {
        color: '#1077CC'
    },
    blueShadeMediumTXT: {
        color: '#1395FF'
    },
    blueShadeLightTXT: {
        color: '#FFC14C'
    },
    blueShadeVeryLightTXT: {
    },

    blueShadeVeryDarkBG: {
        backgroundColor: '#7F6026'
    },
    blueShadeDarkBG: {
        backgroundColor: '#CC8500'
    },
    blueShadeMediumBG: {
        backgroundColor: '#FFA600'
    },
    blueShadeLightBG: {
        backgroundColor: '#FFC14C'
    },
    blueShadeVeryLightBG: {
    },

    // CONTAINERS -------------------------------------------

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
    },

    createDeckText: {
        flex: 1,
        textAlign: 'center'
    },

    // MODAL -------------------------------------

    modalMessage: {
        textAlign: 'center'
    },

    modalButton: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonContainerModal: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 30,
        borderRadius: 30
    },

    // LOGIN PAGE ----------------------------------------

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    loginButtonContainer: {
        borderRadius: 10,
        marginTop: 20,
    },

    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    // INDEX PAGE ----------------------------------------

    indexContainer: {
        padding: 0,
    },

    indexCreateDeckButton: {
        paddingTop: 30,
        paddingBottom: 15,
        shadowRadius: 5,
        shadowColor: 'grey',
    },

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
        backgroundColor: '#999999',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
    },

    profileName: {
        fontSize: 32,
        flex: 1,
        color: 'white'
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
    },

    createContainer: {
        flex: 1,
        paddingBottom: 500,
        padding: 20
    },

    colorsContainer: {
        flexDirection: 'row'

    },

    colorRadioContainer: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
    },

    colorRadio: {
        textAlign: 'center',
        color: 'white'
    },

    colorRadioActive: {
        color: 'grey'
    },

    answerContainer: {
         flex: 1,
         flexDirection: 'row'
    },

    inputCreate: {
        paddingTop: 26,
    },

    answerInput: {
        flex: 1,
    },

    answerCheck: {
        paddingTop: 18,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 0,
        height: 70,
        backgroundColor: 'grey'
    },

    answerCheckCorrect: {
        backgroundColor: 'green'
    },

    createSubmitButton: {
        backgroundColor: 'grey'
    },

    submitDeckButton: {
        color: 'white'
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
