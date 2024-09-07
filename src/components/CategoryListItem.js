import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CategoryListItem = () => {
  return (
    <View style={styles.item}>
      <Text>Baptism</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'indianred'
  }
})
export default CategoryListItem
