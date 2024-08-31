import { Button, Text, View, Pressable } from "react-native"
import { Link } from "expo-router"
export default function about() {
    return <View> 
        <Text>(⓿_⓿)</Text>
        <Link href={"/"} > <Pressable  >Back</Pressable></Link>
    </View>
}