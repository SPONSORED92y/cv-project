import React, { Component } from "react";

class Generel extends Component {
    constructor() {
        super();

        this.state = {
            display: {
                name: '',
                phone: '',
                email: '',
            },
            displays: [],
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    handleChangeName = (e) => {
        this.setState({
            display: {
                name: e.target.value,
                phone: this.state.display.phone,
                email: this.state.display.email,
            },
        });
    };
    handleChangePhone = (e) => {
        this.setState({
            display: {
                name: this.state.display.name,
                phone: e.target.value,
                email: this.state.display.email,
            },
        });
    };
    handleChangeEmail = (e) => {
        this.setState({
            display: {
                name: this.state.display.name,
                phone: this.state.display.phone,
                email: e.target.value,
            },
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            displays: this.state.displays.concat(this.state.display),
        });
    };

    render() {
        const { display, displays } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <div>

                        <label htmlFor="nameInput">Name: </label>
                        <input onChange={this.handleChangeName} value={display.name.text} type="text" id="phoneInput" />
                    </div>
                    <div>
                        <label htmlFor="phoneInput">Phone: </label>
                        <input onChange={this.handleChangePhone} value={display.phone.text} type="text" id="phoneInput" />
                    </div>
                    <div>
                        <label htmlFor="emailInput">Email: </label>
                        <input onChange={this.handleChangeEmail} value={display.email.text} type="text" id="emailInput" />
                    </div>
                    <button type="submit">Save Generel</button>
                </form>
            </div>
        );
    }

}
export default Generel;