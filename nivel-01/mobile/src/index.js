import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import api from './service/api';

// Não possuem sicnificado semântico
// Não possuem estilização própria
// Não tem herança de estilos
// Todos componentes possuem por padrão display flex

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((resp) => {
      console.log(resp.data);
      setProjects(resp.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#ddd',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
