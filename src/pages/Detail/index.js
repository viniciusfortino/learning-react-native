import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';

import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail() {
    const navigation = useNavigation();
    const message = "olá, esse é um email teste.";
    const route = useRoute();
    const incident = route.params.incident;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'submeil',
            recipients: ['vinicius.fortin0@gmail.com'],
            body: message
        });
    }

    /* camos abrir o whastapp usando deeplinking */
    function sendWhatsAppMessage() {
        Linking.openURL(`whatsapp://send?phone=5521967315631&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#E82041"
                    />
                </TouchableOpacity>
            </View>


            <FlatList
                data={[1]}
                keyExtractor={indicent => String(indicent)}
                style={styles.incidentList}
                showsHorizontalScrollIndicator='false'
                renderItem={() => (
                    <View>
                        <View style={styles.incident}>
                            <Text style={[styles.incidentProperty, { marginTop: 0 }]}>PET:</Text>
                            <Text style={styles.incidentValue}>{incident.name}</Text>

                            <Text style={styles.incidentProperty}>CASO</Text>
                            <Text style={styles.incidentValue}>{incident.title}</Text>

                            <Text style={styles.incidentProperty}>VALOR:</Text>
                            <Text style={styles.incidentValue}>{incident.value}</Text>
                        </View>

                        <View style={styles.contactBox}>
                            <Text style={styles.hetoTitle}>Salve</Text>
                            <Text style={styles.hetoTitle}>Seja o heroi.</Text>

                            <Text style={styles.hetoDescription}>Entre em contato</Text>

                            <View styles={styles.actions}>

                                <TouchableOpacity
                                    style={styles.action}
                                    onPress={sendWhatsAppMessage}
                                >
                                    <Text style={styles.actionText}>Whatsapp</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.action}
                                    onPress={sendMail}
                                >
                                    <Text style={styles.actionText}>E-mail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />


        </View>
    );
}