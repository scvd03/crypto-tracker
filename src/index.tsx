import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const client = new QueryClient();

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Router>,
  document.getElementById('root')
);
