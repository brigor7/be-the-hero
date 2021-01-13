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

  headerText: {
    fontSize: 16,
    color: '#737380',
  },
  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  incidentList: {
    marginTop: 32,
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#414141',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 4,
    fontSize: 15,
    color: '#737373',
    marginBottom: 24,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  detailsButtonText: {
    color: '#e02041',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
