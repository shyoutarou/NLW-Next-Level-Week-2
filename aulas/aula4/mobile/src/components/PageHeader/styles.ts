import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257E5',

    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        maxWidth: 180,
        lineHeight: 32,
        marginVertical: 40,
    }
})

export default styles