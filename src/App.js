//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>Hello</h1>
  <nav className="navbar sm:navbar-expand bg-1 fg-2">
    
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog className="drawer drawer-end" tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>          
        </ul>
  
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn-outline theme-success" type="submit">Search</button>
    </form>
  
      </div>
    </dialog>
  </div>
</nav>
   </>
  );
}

export default App;
