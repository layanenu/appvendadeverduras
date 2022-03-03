import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Topo from '../Cesta/Componentes/Topo';
import logo from '../../../assets/logo.png';
import Detalhes from './Componentes/Detalhes';

export default function Cesta({ topo, detalhes }) {
    return <>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />            
        </View>
    </>
}

const estilos = StyleSheet.create({
    
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    
});