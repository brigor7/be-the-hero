import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const navigation = useNavigation();

  //Estados para paginação
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    //Se página foi carregada
    if (loading) {
      return;
    }

    //Se numero de registro é igual ao total
    if (totalIncidents > 0 && incidents.length === totalIncidents) {
      return;
    }

    try {
      setLoading(true);
      const response = await api.get('incidents', {
        params: {
          page,
        },
      });
      setIncidents([...incidents, ...response.data]);
      setTotalIncidents(response.headers['x-total-count']);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log('#Erro na funcao loadIncidents: ' + error);
    }
  }
  useEffect(() => {
    try {
      loadIncidents();
    } catch (error) {
      console.log('#Erro no load Incidents: ' + error);
    }
  }, []);

  function navigateToDetails(incident) {
    navigation.navigate('Details', { incident });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de{' '}
          <Text style={styles.headerTextBold}>{totalIncidents} casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>Caso</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => {
                navigateToDetails(incident);
              }}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes.</Text>
              <Feather name="arrow-right" size={20} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
