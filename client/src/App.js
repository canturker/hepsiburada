import './assets/css/normalize.css';
import ApproveModal from './components/ApproveModal';
import CategoryDetail from './pages/CategoryDetail';

const App = () => {
  return (
    <div className='App'>
      <CategoryDetail />
      <ApproveModal />
    </div>
  );
};

export default App;
