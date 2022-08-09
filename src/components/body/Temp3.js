import { addDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

const CalendarApp = ({ date }) => {
  const curYear = format(date, 'yyyy');
  const curMonName = format(date, 'LLLL');
  const curMon = format(date, 'M');
  const curDay = format(date, 'EEE');
  const curDate = format(date, 'dd');
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [selectedYear, setSelectedYear] = useState(curYear); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(curMon); //현재 선택된 달
  const dateTotal = new Date(selectedYear, selectedMonth, 0).getDate();
  const numColumns = 7;
  const [containerWidth, setContainerWidth] = useState(0);
  const countNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const num = -1;

  useEffect(() => {}, [date]);

  return (
    <View>
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
      {/* <Text>{curYear}</Text>
      <Text>{curMon}</Text>
      <Text>{curDay}</Text>
      <Text>{curDate}</Text>
      <Text>{dateTotal}</Text>
      <Text>{selectedYear}</Text>
      <Text>{selectedMonth}</Text> */}

      <FlatList
        data={countNum}
        onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
        renderItem={({ item, index }) => (
          <Item
            title={item.title}
            width={containerWidth / numColumns}
            index={index}
            num={countNum}
          />
        )}
        numColumns={numColumns}
      />

      {/* <View style={styles.containerBox}>
        {[...Array(dateTotal)].map((item, index) => {
          return <Text>{index + 1}</Text>;
        })}
      </View> */}
    </View>
  );
};

const Item = ({ title, width, index, num }) => (
  <View
    style={{
      width,
      padding: 20,
      marginLeft: 1,
    }}
  >
    <Text style={{ color: 'black', fontSize: 14 }}>{index + 1}</Text>
  </View>
);

const DayStart = () => {
  return <View></View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 3,
    marginBottom: 15,
  },
  weekItem: {
    alignItems: 'center',
  },
  weekdayText: {
    color: 'gray',
  },
  sundayText: {
    color: 'red',
  },
  saturdayText: {
    color: 'blue',
  },
  containerBox: {
    flexDirection: 'row',
  },
});

// const returnDay = useCallback(() => {
//   //선택된 달의 날짜들 반환 함수
//   let dayArr = [];

//   for (const nowDay of week) {
//     const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
//     if (week[day] === nowDay) {
//       for (let i = 0; i < dateTotalCount; i++) {
//         dayArr.push(<View>{i + 1}</View>);
//       }
//     } else {
//       dayArr.push(<View></View>);
//     }
//   }

//   return dayArr;
// }, [selectedYear, selectedMonth, dateTotalCount]);

export default CalendarApp;
