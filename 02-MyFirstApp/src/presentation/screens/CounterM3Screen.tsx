import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.style';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>

      {/* <Icon name="accessibility-outline" size={45} /> */}

      <FAB
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        variant="surface"
        icon="add"
      />
    </View>
  );
};
