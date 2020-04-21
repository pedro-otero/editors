import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link, Route} from "react-router-dom";

import TinyMCE from "./TinyMCE";
import Draft from "./Draft";
import CKEditorComponent from "./CKEditorComponent";

const Root = () => {
  return (
    <HashRouter>
      <div className="d-flex h-100">
        <div className="col-4 bg-light">
          <h3>Editors</h3>
          <ul>
            <li><Link to="/tiny">Tiny MCE</Link></li>
            <li><Link to="/draft">Draft.js</Link></li>
            <li><Link to="/ckeditor">CKEditor</Link></li>
          </ul>
        </div>
        <div className="col-8">
          <Route path="/tiny"><TinyMCE/></Route>
          <Route path="/draft"><Draft/></Route>
          <Route path="/ckeditor"><CKEditorComponent/></Route>
        </div>
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));