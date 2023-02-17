import Header from './Components/header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import InvoiceForm from './Components/invoiceForm';


function App() {
  return (
    <div className="App">
      <Header />
      <InvoiceForm />
    </div>
  );
}

export default App;
