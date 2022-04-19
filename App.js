import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Route from './component/Routes/Route';
import {QueryClientProvider, QueryClient} from 'react-query'
import Header from './component/List/Header';

const queryClient = new QueryClient();

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <Header />
    <Route />
  </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
