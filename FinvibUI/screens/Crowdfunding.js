import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Appbar } from 'react-native-paper';

const projects = [
  { id: '1', title: 'Farmers Aid', description: 'Funding for rural farmers' },
  { id: '2', title: 'Women Empowerment', description: 'Loans for women-led businesses' },
];

export default function Crowdfunding() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Crowdfunding Projects" />
      </Appbar.Header>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
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
