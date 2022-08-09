import { addDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

const CalendarApp = ({ date }) => {
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  //const [month, setMonth] = useState([]);
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const numColumns = 7;
  const [containerWidth, setContainerWidth] = useState(0);
  const margins = 39;

  //const [week, setWeek] = useState([]);

  useEffect(() => {}, [date]);

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>이동</Text>
        </TouchableOpacity>
        <Text>{format(date, 'MMMM')}</Text>
        <Text>{format(date, 'Y')}</Text>
        <TouchableOpacity>
          <Text>이동</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {week.map((item, index) => {
          return (
            <View key={week[index]} style={styles.weekItem}>
              {week[index] == 'Sun' ? (
                <Text key={week[index]} style={styles.sundayText}>
                  {week[index]}
                </Text>
              ) : week[index] == 'Sat' ? (
                <Text key={week[index]} style={styles.saturdayText}>
                  {week[index]}
                </Text>
              ) : (
                <Text key={week[index]} style={styles.weekdayText}>
                  {week[index]}
                </Text>
              )}
            </View>
          );
        })}
      </View>
      <View style={styles.containers}>
        <FlatList
          data={month}
          onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={({ item, index }) => (
            <Text
              style={styles.monthText}
              title={month[index]}
              width={(containerWidth - margins) / numColumns}
            >
              {month[index]}
            </Text>
          )}
          keyExtractor={(item, index) => index}
          numColumns={numColumns}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 3,
    marginBottom: 5,
  },
  weekItem: {
    alignItems: 'center',
  },
  weekdayText: {
    color: 'gray',
    marginBottom: 5,
    backgroundColor: 'blue',
  },
  sundayText: {
    color: 'red',
    marginBottom: 5,
    backgroundColor: 'blue',
  },
  saturdayText: {
    color: 'blue',
    marginBottom: 5,
    backgroundColor: 'blue',
  },
  monthText: {
    color: 'black',
    // marginBottom: 5,
    // backgroundColor: 'blue',
    // width: 30,
    margin: 10,
  },
  containers: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingVertical: 3,
    // paddingHorizontal: 15,
    margin: 10,
    // marginBottom: 5,
  },
});

export const getWeekDays = (date) => {};

export default CalendarApp;
