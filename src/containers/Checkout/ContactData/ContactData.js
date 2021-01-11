import React, { Component } from "react";
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import styles from "./ContactData.module.css";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Max la menace",
                address: {
                    street: "Teststreet 3",
                    zipCode: "12345"
                },
                email: "Test@gmail.com"
            },
            deliveryMEthod: "Fastest"
        }

        axios.post('/orders.json', order) // ".json" only for Firebase
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={styles.Input} type='text' name='name' placeholder="your Name" />
                <input className={styles.Input} type='email' name='email' placeholder="your Mail" />
                <input className={styles.Input} type='text' name='street' placeholder="Street" />
                <input className={styles.Input} type='text' name='postal' placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        console.log("yoo")
        
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter you contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;