import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import firebase from './firebase.js';

class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
		  currentTask: '',
		  description: '',
		  items: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	  handleChange(e) {
		this.setState({
		  [e.target.name]: e.target.value
		});
	  }
	  handleSubmit(e) {
		e.preventDefault();
		const itemsRef = firebase.database().ref('items');
		const item = {
		  title: this.state.currentTask,
		  description: this.state.description
		}
		itemsRef.push(item);
		this.setState({
		  currentTask: '',
		  description: ''
		});
	  }
	  componentDidMount() {
		const itemsRef = firebase.database().ref('items');
		itemsRef.on('value', (snapshot) => {
		  let items = snapshot.val();
		  let newState = [];
		  for (let item in items) {
			newState.push({
			  id: item,
			  title: items[item].title,
			  description: items[item].description
			});
		  }
		  this.setState({
			items: newState
		  });
		});
	  }
	  removeItem(itemId) {
		const itemRef = firebase.database().ref(`/items/${itemId}`);
		itemRef.remove();
	  }
  render() {
   return(
   	<div>
   		<App></App>
   		<div className = "content-display">
       			<h1>Todos</h1>
				   <section> 
				  <form onSubmit={this.handleSubmit}>

                  <input type="text" name="description" placeholder="" onChange={this.handleChange} value={this.state.description} />
                  <button>Add Item</button>
                </form>
          </section>
          <section className='display-item'>
              <div className="wrapper">
                <ul>
                  {this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3>{item.title}</h3>
                        <h2>{item.description}</h2>
													<p>
                          <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Todo;