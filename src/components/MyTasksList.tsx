import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface HeaderFlatListProps {
  usingDarkTheme: boolean;
}

function FlatListHeaderComponent({ usingDarkTheme } : HeaderFlatListProps) {
  return (
    <View>
      <Text style={ usingDarkTheme ? stylesDark.header : stylesLight.header }>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  usingDarkTheme: boolean;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ usingDarkTheme, tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={ tasks }
      keyExtractor={ item => String(item.id) }
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={ item.done ? (usingDarkTheme ? stylesDark.taskButtonDone : stylesLight.taskButtonDone) : (usingDarkTheme ? stylesDark.taskButton : stylesLight.taskButton) }
            onPress={ () => onPress(item.id) }
            onLongPress={ () => onLongPress(item.id) }
          >
            <View 
              testID={`marker-${index}`}
              style={ item.done ? (usingDarkTheme ? stylesDark.taskMarkerDone : stylesLight.taskMarkerDone) : (usingDarkTheme ? stylesDark.taskMarker : stylesLight.taskMarker) }
            />
            <Text
              style={ item.done ? (usingDarkTheme ? stylesDark.taskTextDone : stylesLight.taskTextDone) : (usingDarkTheme ? stylesDark.taskText : stylesLight.taskText) }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent usingDarkTheme={ usingDarkTheme } />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const stylesLight = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    //fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})

const stylesDark = StyleSheet.create({
  header: {
    color: '#BF4AD4',
    fontSize: 24,
    //fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#12A952',
    marginRight: 10
  },
  taskText: {
    color: '#E1E1E6',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: '#222222',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#12A952',
    marginRight: 10
  },
  taskTextDone: {
    color: '#E1E1E6',
    textDecorationLine: 'line-through'
  }
})
