import { Link } from "expo-router"
import { Button } from "react-native"
import { Text, View } from "react-native"

export default function home() {
    return <View> 
        <Link href={"/about"}> <Button title="Click"></Button></Link>
    </View>
}