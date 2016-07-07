import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#F5FCFF',
    },
    statusBarBg: {
        height: 20,
    },
    navBar: {

    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        height: 40,
        padding: 10
    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
        padding: 20
    }
});

export default Styles;
