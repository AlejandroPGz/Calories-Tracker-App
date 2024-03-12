import { ActivityIndicator, Button, FlatList, Text, TextInput, View } from 'react-native';
import { RenderItemFoodList } from '../components/FoodItemList';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSearchFood } from '../hooks/useSearchFood';
import { ListEmpty } from '../components/ListEmpty';

const Search = () => {
  console.log('redibujando');
  const [foodList, setFoodList] = useState([]);
  const {valorInput, setValorInput, buscar, data, isLoading, errors} = useSearchFood();
  console.log(data);
  useEffect(() => {
    setFoodList(data)
  }, [data])
  
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setValorInput}
        value={valorInput}
        style={styles.inputSearch}
        placeholder="Search..."
      />
      {valorInput && <Button color='#7dad35' title="Search" onPress={buscar} />}
      {/* {!valorInput && <Text style={{fontSize: 25, fontWeight: '700', color: 'white', marginTop: 25}}>Input Vacio</Text> } */}
      {isLoading && 
      <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <ActivityIndicator size="large"></ActivityIndicator>
        
      </View>
        }      
      {valorInput && foodList && 
            <FlatList
            data={foodList}
            contentContainerStyle={{ gap: 5 }}
            renderItem={({ item }) => <RenderItemFoodList item={item} />}
            ListEmptyComponent={ <ListEmpty></ListEmpty> }
            />
          }

    </View>
  );
};

export default React.memo(Search); // ¡Aquí está el componente convertido en React memo!



export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#18181b',
      padding: 10,
      gap: 10
    },
    inputSearch: {
      padding: 6,
      backgroundColor: '#e4ebe0',
      borderRadius: 20
    },
    button: {
      backgroundColor: 'black'
    }
  });
  