import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export const RenderItemFoodList = ({item}) => {
        return (
          <View key={item.food.foodId} style={styles.foodListContainer}>
            <View style={{flex: 1}}>
            <Text style={styles.foodItemListTitle}>{item.food.label}</Text>
            <Text style={styles.foodItemListInfo}>{item.food.nutrients.ENERC_KCAL.toFixed(0)} Cal, {item.food.nutrients.PROCNT.toFixed(2)} Protein</Text>
            </View>
            <AntDesign name="pluscircleo" size={24} color="#f5faeb" />
            </View>
        )
}

const styles = StyleSheet.create({
    foodListContainer: {
      backgroundColor: "#1e2e0e",
      padding: 10,
      borderRadius: 5,
      gap: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    foodItemListTitle: {
      color: "#ffffff",
      fontWeight: 'bold',
      fontSize: 17
    },
    foodItemListInfo: {
      color: "#d3eaac",
      fontWeight: '500',
      fontSize: 14
    }
  });
  