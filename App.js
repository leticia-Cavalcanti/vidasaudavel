import { StyleSheet, View} from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/form';
//importar os componentes titulos e formulario

//exportar a função
export default function App() {
  return (
    <View style={styles.container}>      
      <Title/>
      <Form/>      
    </View>
  );
}
//Constante para definição do estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
