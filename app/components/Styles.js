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
        fontSize: 20,
        backgroundColor: "#dfdfdf",
        height: 40,
        padding: 10,
        marginBottom: 10
    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
        padding: 20
    },


});

export default Styles;
