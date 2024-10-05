/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Modal, Pressable, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {StylesCalendar} from '../Themes/StylesCalendario';

// Propiedades del modal de calendario
interface CalendarioProps {
  openModal: boolean;
  currentDay: string;
  handleDateSelection: (day: any) => void;
  handleModal: () => void;
}

export const Calendario: React.FC<CalendarioProps> = ({
  openModal,
  currentDay,
  handleDateSelection,
  handleModal,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={openModal}>
      <View style={StylesCalendar.centeredView}>
        <View style={StylesCalendar.modalView}>
          <Calendar
            style={{width: 320, maxWidth: 320}}
            current={currentDay}
            onDayPress={handleDateSelection}
            theme={{
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              monthTextColor: 'blue',
            }}
          />
          <Pressable onPress={handleModal}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
