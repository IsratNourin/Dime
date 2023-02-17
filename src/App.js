import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/header';
import InvoiceForm from './Components/invoiceForm';
import InvoiceFooter from './Components/invoiceFooter';

function App() {
  return (
    <div className="App">
      <Header />
      <InvoiceForm />
      <InvoiceFooter />
    </div>
  );
}

export default App;
