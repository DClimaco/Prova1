import {Image, TextInput, Text, View} from 'react-native'
import styles from './styles'

export default function DashboardPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/simbolo.png')} style={styles.logo}/>
            <Text style={styles.txt}>Nos diga o seu problema:</Text>
            <TextInput placeholder='Sintomas' style={styles.input}/>
        </View>
    )
}
