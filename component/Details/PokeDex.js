import React from "react";
import {View, Text} from 'react-native'
import { Card, Button } from '@rneui/themed';

export default function PokeDex(){
    return(
        <View>
            <Card>
                <Card.Title>
                    No Pokemon At the Moment
                </Card.Title>
            </Card>
        </View>
    )
}