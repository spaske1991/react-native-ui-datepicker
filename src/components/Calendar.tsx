import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { useCalendarContext } from '../CalendarContext';
import type { CalendarViews } from '../enums';
import type { HeaderProps } from '../types';
import Header from './Header';
import YearSelector from './YearSelector';
import MonthSelector from './MonthSelector';
import DaySelector from './DaySelector';
import TimeSelector from './TimeSelector';

const CalendarView: Record<CalendarViews, ReactNode> = {
  year: <YearSelector />,
  month: <MonthSelector />,
  day: <DaySelector />,
  time: <TimeSelector />,
};

interface PropTypes extends HeaderProps {}

const Calendar = ({ buttonPrevIcon, buttonNextIcon }: PropTypes) => {
  const { calendarView, mode } = useCalendarContext();

  return (
    <View style={styles.container} testID="calendar" accessible={false}>
      {mode !== 'time' ? (
        <Header
          buttonPrevIcon={buttonPrevIcon}
          buttonNextIcon={buttonNextIcon}
        />
      ) : null}
      <View style={styles.calendarContainer}>{CalendarView[calendarView]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  calendarContainer: {
    height: 'fit-content',
    alignItems: 'center',
  },
});

export default Calendar;
