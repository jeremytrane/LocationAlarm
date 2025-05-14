import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TextInput } from 'react-native';
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

export default function AlarmScreen() {
  const [alarmName, setAlarmName] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [radius, setRadius] = useState('100');
  const [notificationType, setNotificationType] = useState('sound');

  const handleSave = () => {
    // TODO: Implement alarm saving logic
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Alarm Name</Text>
        <TextInput
          style={styles.input}
          value={alarmName}
          onChangeText={setAlarmName}
          placeholder="Enter alarm name"
        />

        <Text style={styles.label}>Radius (meters)</Text>
        <TextInput
          style={styles.input}
          value={radius}
          onChangeText={setRadius}
          keyboardType="numeric"
          placeholder="Enter radius"
        />

        <Text style={styles.label}>Notification Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={notificationType}
            onValueChange={(value: string) => setNotificationType(value)}
            style={styles.picker}
          >
            <Picker.Item label="Sound" value="sound" />
            <Picker.Item label="Vibration" value="vibration" />
            <Picker.Item label="Both" value="both" />
          </Picker>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Enable Alarm</Text>
          <Switch
            value={isEnabled}
            onValueChange={setIsEnabled}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#007AFF' : '#f4f3f4'}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Alarm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
}); 