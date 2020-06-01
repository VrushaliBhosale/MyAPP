import { observable, decorate, computed, when, autorun, action } from 'mobx';
import { configure } from 'mobx';
configure({ enforceActions: "observed" });

class Store {

  count = 0;
  name = "vrush";
  boolean = false
  tasks = [];

  increment = () => {
    this.count++;
  }
  changeString = () => {
    this.name = this.name === "vrush" ? "Mayu" : "vrush";
  }
  addTask = (text) => {
    this.tasks.push(text);
    this.count++;
  }
  get getCount() {
    return this.count;
  }
  set getCount(getCount) {
    this.count = this.count * this.count;
    console.log("count", this.count);
  }
  removeTask = () => {
    this.tasks.pop();
    this.count--;
  }
  isNice = (count) => {
    return count > 5;
  }

  watcher = when(() => this.count === 5, () => {
    alert("Value became 5...");
  });

  hello = autorun(() => {
    console.log("name is changed", this.name, this.count);
  });

}
decorate(Store, {
  count: observable,
  tasks: observable,
  name: observable,
  boolean: observable,
  addTask: action,
  removeTask: action,
  increment: action,
  getCount: computed,

});
const store = new Store();
export default store;