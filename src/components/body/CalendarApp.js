import { format } from 'date-fns';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

const CalendarApp = () => {
  const [date, setDate] = useState(new Date());
  const curYear = format(date, 'yyyy');
  const curMonName = format(date, 'LLLL');
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setDate(new Date(date.setMonth(date.getMonth() - 1)));
            setMoment(getMoment.clone().subtract(1, 'month'));
          }}
        >
          <Text>Previous</Text>
        </TouchableOpacity>
        <Text>
          {curMonName} {curYear}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setDate(new Date(date.setMonth(date.getMonth() + 1)));
            setMoment(getMoment.clone().add(1, 'month'));
          }}
        >
          <Text>Next</Text>
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
      <View>
        {[...Array(lastWeek - firstWeek + 1)].map((item, i) => {
          return (
            <View key={i} style={styles.container}>
              {Array(7)
                .fill(0)
                .map((data, index) => {
                  let days = today
                    .clone()
                    .startOf('year')
                    .week(firstWeek + i)
                    .startOf('week')
                    .add(index, 'day');
                  return moment().format('YYYYMMDD') === days.format('YYYYMMDD') ? (
                    <View key={index} style={styles.weekToday}>
                      <Text>{days.format('D')} </Text>
                    </View>
                  ) : days.format('MM') !== today.format('MM') ? (
                    <View key={index} style={styles.notThisMonth}>
                      <Text>{days.format('D')} </Text>
                    </View>
                  ) : (
                    <View key={index}>
                      <Text>{days.format('D')} </Text>
                    </View>
                  );
                })}
            </View>
          );
        })}
      </View>
    </>
  );
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
  weekToday: {
    borderRadius: '50%',
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notThisMonth: {
    opacity: 0.4,
  },
});

export default CalendarApp;
