import { addDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import moment from 'moment';

const CalendarApp = () => {
  const [date, setDate] = useState(new Date());
  const curMon = format(date, 'M');
  const curYear = format(date, 'yyyy');
  const curMonName = format(date, 'LLLL');
  const dayFirst = new Date(date.getFullYear(), 0, 1);
  const dayLast = new Date(date.getFullYear(), curMon, 0);
  const countFirDays = Math.floor((date - dayFirst) / (24 * 60 * 60 * 1000)) - 1;
  const countLastDays = Math.floor((dayLast - dayFirst) / (24 * 60 * 60 * 1000));
  const firstWeek = Math.ceil((date.getDay() + countFirDays) / 7) - 1;
  const lastWeek =
    Math.ceil((date.getDay() + 1 + countLastDays) / 7) + 1 === 1
      ? 53
      : Math.ceil((date.getDay() + 1 + countLastDays) / 7) + 1;
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setDate(new Date(date.setMonth(date.getMonth() - 1)));
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
        {[...Array(lastWeek - firstWeek)].map((item, i) => {
          return (
            <View style={styles.container}>
              {Array(7)
                .fill(0)
                .map((data, index) => {
                  let days = today
                    .clone()
                    .startOf('year')
                    .week(firstWeek + i)
                    .startOf('week')
                    .add(index, 'day');
                  return (
                    <View>
                      <Text key={index}>{days.format('D')} </Text>
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

const calendarArr = () => {
  let result = [];
  return result;
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
});

export default CalendarApp;
