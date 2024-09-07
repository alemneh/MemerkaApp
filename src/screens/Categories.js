import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text
} from 'react-native'
import CategoryListItem from '../components/CategoryListItem'

const Categories = () => {
  return (
    <SafeAreaView>
      <CategoryListItem />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Categories
