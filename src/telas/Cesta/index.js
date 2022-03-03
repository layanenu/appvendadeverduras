import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Topo from '../Cesta/Componentes/Topo';
import logo from '../../../assets/logo.png';
import Detalhes from './Componentes/Detalhes';
import Itens from './Componentes/itens';

export default function Cesta({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens} />            
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    
});