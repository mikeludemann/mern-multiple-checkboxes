import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Checkboxes extends Component {

	state = {
		meat: false,
		fish: false,
		chicken: false,
		salad: false,
		drink: false
	};

	onChangeMeat = () => {
		this.setState(initialState => ({
			meat: !initialState.meat,
		}));
	}

	onChangeFish = () => {
		this.setState(initialState => ({
			fish: !initialState.fish,
		}));
	}

	onChangeChicken = () => {
		this.setState(initialState => ({
			chicken: !initialState.chicken,
		}));
	}

	onChangeSalad = () => {
		this.setState(initialState => ({
			salad: !initialState.salad,
		}));
	}

	onChangeDrink = () => {
		this.setState(initialState => ({
			drink: !initialState.drink,
		}));
	}

	onSubmit = (e) => {
		e.preventDefault();

		let checkArray = [];
		for (var key in this.state) {
			if (this.state[key] === true) {
				checkArray.push(key);
			}
		}

		let checkData = {
			checkbox: checkArray.toString()
		};

		axios.post('http://localhost:4000/api/save', checkData)
			.then((res) => {
				console.log(res.data);
			}).catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="row">
				<div classname="col-12">
					<h2>Saving Multiple Checkboxes Values</h2>
				</div>
				<div classname="col-12">
					<form onSubmit={this.onSubmit}>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox"
									checked={this.state.meat}
									onChange={this.onChangeMeat}
									className="form-check-input"
								/>
								Meat
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox"
									checked={this.state.drink}
									onChange={this.onChangeDrink}
									className="form-check-input"
								/>
								Drink
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox"
									checked={this.state.chicken}
									onChange={this.onChangeChicken}
									className="form-check-input"
								/>
								Chicken
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox"
									checked={this.state.salad}
									onChange={this.onChangeSalad}
									className="form-check-input"
								/>
								Salad
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox"
									checked={this.state.fish}
									onChange={this.onChangeFish}
									className="form-check-input"
								/>
								Fish
							</label>
						</div>
						<div className="form-group">
							<button className="btn btn-success">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Checkboxes;
