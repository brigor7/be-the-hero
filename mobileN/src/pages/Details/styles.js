import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  incidentContainer: {
    marginTop: 10,
  },

  incidentBackground: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 10,
  },

  incidentTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },

  incidentDetails: {
    marginTop: 4,
    fontSize: 15,
    color: '#737373',
    marginBottom: 24,
  },

  helpTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  helpContato: {
    fontSize: 15,
    color: '#737373',
    marginTop: 10,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
