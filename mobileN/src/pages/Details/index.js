import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Details() {
  const navigation = useNavigation();
  const incident = useRoute().params.incident;
  const message = `Ola ${incident.name}, vi o caso: *${incident.title}* no APP Be The Hero e *quero ajudá-los*.`;
  function navigateToIncidents() {
    navigation.goBack();
  }
  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso: ${incident.title}`,
      recipients: `${incident.email}`,
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=55${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateToIncidents}>
          <Feather name={'arrow-left'} size={16} color="#e02041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incidentContainer}>
        <View style={styles.incidentBackground}>
          <Text style={styles.incidentTitle}>ONG</Text>
          <Text style={styles.incidentDetails}>
            {incident.name} de {incident.city}/{incident.uf}
          </Text>

          <Text style={styles.incidentTitle}>Caso</Text>
          <Text style={styles.incidentDetails}>{incident.title}</Text>

          <Text style={styles.incidentTitle}>Descrição</Text>
          <Text style={styles.incidentDetails}>{incident.description}</Text>

          <Text style={styles.incidentTitle}>Valor</Text>
          <Text style={styles.incidentDetails}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(incident.value)}
          </Text>
        </View>
      </View>

      <View style={styles.incidentContainer}>
        <View style={styles.incidentBackground}>
          <Text style={styles.helpTitle}>Salve o dia!</Text>
          <Text style={styles.helpTitle}>Seja o Hero (Heroi) desse caso</Text>
          <Text style={styles.helpContato}>Entre em contato</Text>
          <View style={styles.actions}>
            <TouchableOpacity onPress={sendWhatsapp} style={styles.action}>
              <Text style={styles.actionText}>Wathsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={sendEmail} style={styles.action}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
