import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Appbar } from 'react-native-paper';

export default function CreditScore() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Credit Score" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Your Credit Score</Title>
          <Paragraph>Your AI-calculated credit score is:</Paragraph>
          <Title style={styles.score}>720</Title>
        </Card.Content>
      </Card>
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
  score: {
    fontSize: 48,
    color: 'green',
    textAlign: 'center',
  },
});
