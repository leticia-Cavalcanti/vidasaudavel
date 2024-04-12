//blocos de importaçao de componentes
import React from  "react";
import { View, Text } from "react-native";
import styles from "./style"
 //exportar função do titulo
export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>App - Vida Saudável</Text>
        </View>
    );
}