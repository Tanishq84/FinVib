import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, Appbar } from 'react-native-paper';

export default function FinancialLiteracy() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Financial Literacy" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Learn Financial Skills</Title>
          <Paragraph>Explore topics such as loans, credit management, and more.</Paragraph>
        </Card.Content>

        <Card.Actions>
          <Button mode="contained" onPress={() => {}}>
            Watch Video
          </Button>
        </Card.Actions>
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
});
