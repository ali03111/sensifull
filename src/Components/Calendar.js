import React, {useState} from 'react';
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';
import {Colors, FontSize} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';
import {Image, StyleSheet} from 'react-native';
import {chevLeft, chevRight} from '../Assets';

const UseCalendar = ({onSelectVal, selectedVal}) => {
  const [selected, setSelected] = useState('');
  const today = new Date(); // Get current date
  const minDate = today.toISOString().split('T')[0]; // Convert to ISO format

  return (
    <Calendar
      firstDay={1}
      pastScrollRange={1}
      futureScrollRange={1}
      scrollEnabled
      minDate={minDate} // Set minimum selectable date
      showScrollIndicator={true}
      renderArrow={direction =>
        direction === 'left' ? (
          <Image source={chevLeft} style={styles.arrowLeft} />
        ) : (
          <Image source={chevRight} style={styles.arrowRight} />
        )
      }
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
      style={{
        height: 'auto',
        width: wp('92'),
        paddingBottom: wp('1'),
        // paddingVertical: hp('2'),
      }}
      theme={{
        calendarBackground: '#fcf8e9',
        textSectionTitleColor: Colors.black,
        selectedDayBackgroundColor: Colors.primaryColor,
        selectedDayTextColor: '#ffffff',
        todayTextColor: Colors.primaryColor,
        dayTextColor: Colors.black,
        textDisabledColor: Colors.lightTextGray,
        monthTextColor: Colors.black,
        textDayFontSize: hp('1.5'),
        textMonthFontSize: hp('2'),
        textDayStyle: {
          alignItems: 'center',
          alignSelf: 'center',
          lineHeight: hp('2.6'),
        },

        'stylesheet.calendar.main': {},
        'stylesheet.calendar.header': {
          headerContainer: {
            //   backgroundColor: 'orange',
            position: 'absolute',
            flexDirection: 'row',
            left: wp('0'),
            gap: 5, // because of the loader spinner 'displayLoadingIndicator' if its active
          },
          header: {
            //   backgroundColor: 'purple',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: wp('0'),
            marginTop: hp('2'),
            alignItems: 'center',
          },
        },
      }}
    />
  );
};
export default UseCalendar;

export const styles = StyleSheet.create({
  arrowLeft: {
    resizeMode: 'contain',
    width: wp('2'),
    marginRight: wp('2'),
  },
  arrowRight: {
    resizeMode: 'contain',
    width: wp('2'),
    marginLeft: wp('2'),
  },
});
