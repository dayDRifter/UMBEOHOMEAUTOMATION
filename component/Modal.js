import React , {useState} from 'react';
import { StyleSheet, View , Text , Modal , Button } from 'react-native';
import { TextInput } from 'react-native-paper';
const ModalExample = () =>{
const [active , setactive] = useState(false);
return (
	<View style={styles.container}>
		<Modal 
		animationType="slide"
		transparent={true}
		visible={active}
		onRequestClose={() => {
		console.warn("closed");
		}}
		>
		<View>
			
			<TextInput></TextInput>
			<Button title="SAVE"
					onPress={()=>{setactive(!active)}}/>
			</View>
		</Modal>
		<Button
		title={"EDIT"}
		onPress={()=>{setactive(!active)}}
		/>
	</View>
);
}
export default ModalExample ;

const styles = StyleSheet.create({

button : {
	margin : 20,
	width:5,
}
});
