import { addDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CalendarApp = ({ date }) => {
  const [week, setWeek] = useState([]);
  const [month, setMonth] = useState([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
    // const monthDays = getMonthDays(date);
    // setMonth(monthDays);
  }, [date]);

  return (
    <>
      <View style={styles.container}>
        {week.map((weekDay) => {
          return (
            <View style={styles.weekDayItem} key={weekDay.formatted}>
              <Text style={styles.weekDayText}>{weekDay.formatted}</Text>
              {/* <TouchableOpacity style={touchable}>
              <Text style={textStyles}>{weekDay.day}</Text>
            </TouchableOpacity> */}
            </View>
          );
        })}
      </View>
      {/* <View style={styles.container}>
        {month.map((monthDay) => {
          return (
            <TouchableOpacity style={touchable}>
              <Text style={textStyles}>{monthDay.day}</Text>
            </TouchableOpacity>
          );
        })}
      </View> */}
      {/* <View style={styles.container}>
        {week.map((weekDay) => {
          const textStyles = [styles.label];
          const touchable = [styles.touchable];
          const sameDay = isSameDay(weekDay.date, date);
          if (sameDay) {
            textStyles.push(styles.selectedLabel);
            touchable.push(styles.selectedTouchable);
          }
          return (
            <View>
              <TouchableOpacity style={touchable}>
                <Text style={textStyles}>{weekDay.day}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 3,
  },
  weekDayText: {
    color: 'gray',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  touchable: {
    borderRadius: 20,
    padding: 7.5,
    height: 35,
    width: 35,
  },
  selectedTouchable: {
    backgroundColor: 'green',
  },
  weekDayItem: {
    alignItems: 'center',
  },
});

// get week days
export const getWeekDays = (date) => {
  const start = startOfWeek(date, { weekStartsOn: 1 });

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, 'EEE'),
      date,
      day: getDate(date),
    });
  }

  return final;
};

// export const getMonthDays = (date) => {
//   const start = startOfWeek(date, { weekStartsOn: 1 });
//   let lastDate = new Date(2022, 8, 0);
//   const final = [];

//   for (let i = 0; i < lastDate; i++) {
//     const date = addDays(start, i);
//     final.push({
//       formatted: format(date, 'EEE'),
//       date,
//       day: getDate(date),
//     });
//   }

//   return final;
// };

export default CalendarApp;
