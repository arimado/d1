import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    statusBarBg: {
        height: 20,
        marginBottom: 30,
        backgroundColor: "red"
    },
    navBar: {
        height: 30
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
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
