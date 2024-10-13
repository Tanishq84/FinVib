import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Finvib" subtitle="Financial Freedom" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome to Finvib</Title>
          <Paragraph>Decentralized microfinance platform for financial inclusion.</Paragraph>
        </Card.Content>

        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('Loan Application')}>
            Apply for Loan
          </Button>
        </Card.Actions>
      </Card>

      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => navigation.navigate('Crowdfunding')}
      >
        Crowdfunding Projects
      </Button>

      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => navigation.navigate('Financial Literacy')}
      >
        Financial Literacy
      </Button>

      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => navigation.navigate('Credit Score')}
      >
        Check Credit Score
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f6f6f6',
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginVertical: 8,
  },
});
