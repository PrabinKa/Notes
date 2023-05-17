import {View, Text} from "react-native"

function NotesContainer({data}) {
    return(
        <View>
            <Text>{data.title}</Text>
        </View>
    )
}

export default  NotesContainer;