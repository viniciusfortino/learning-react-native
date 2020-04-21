import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import styles from './styles';
import logoImg from '../../assets/logo.png';

/*
Todas as imagens importadas precisam estar em 3 tamanhos por conta da densidade de pixel dos celulares
podendo no iphone chegar à 3x.
Ou seja, se uma imagem tem 30px num celular normal, cehga a 90px num iphone
logo.png
logo@2x.png
logo@3x.png
*/

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>


            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>subtexto</Text>
            {/*  
                quando quiser importar de api e listar
                renderItem={({item: incident})}
            */}
            <FlatList
                data={[1, 2, 3]}
                keyExtractor={indicent => String(indicent)}
                style={styles.incidentList}
                showsHorizontalScrollIndicator='false'
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>PET:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentProperty}>CASO</Text>
                        <Text style={styles.incidentValue}>nome para caso</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>

                        {/* 
                            Já que vamos enviar um parametro para função e como 
                            precisamos passar uma função e não o retorno dela pro onPress, 
                            inicio a função com uma arrow function
                        */}
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver detables</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}