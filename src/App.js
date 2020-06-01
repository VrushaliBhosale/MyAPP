import React, { Component } from 'react';
import './App.css';
import { decorate, observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import store from './store';
import List from './component/list';

class App extends Component {
  constructor() {
    super();
    let cityname = observable.box("pune");
    console.log(cityname.get());
  }

  render() {
    return (
      <div className="App">
        <DevTools />
        Tasks:
        <ul>
          {
            store.tasks.map((item, index) => {
              return (
                <List key={index} data={item} />
              )
            })
          }</ul>
        <br />
        <button onClick={() => store.addTask("MIlk")}>+</button>
        <button onClick={store.removeTask}>-</button><br />
        Name is : {store.name} {store.boolean + ""}
        <button onClick={store.changeString}>Chanage String</button><br />
        Count:{store.count}
        Vrushali repo
      </div>
    );
  }
}

decorate(App, {
  render: observer,
  //cityname: observable
});

export default App;
