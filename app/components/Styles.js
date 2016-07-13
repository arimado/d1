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

    // SHOW DECK --------------------------------------

    deckContainer: {
        flex: 1,
         backgroundColor: '#CCCCCC'
    },

    deckScrollView: {
        padding: 25
    },

    deckBG: {
         flex: 1,
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
        height: 40,
        padding: 10,
        marginBottom: 10
    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
        padding: 20,
        backgroundColor: '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center',
    },


});

export default Styles;
