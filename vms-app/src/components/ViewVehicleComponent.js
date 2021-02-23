import React, { Component } from 'react'
import VehicleService from '../services/VehicleService'
/*******************************/

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vehicle: {}
        }
    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.id).then( res => {
            this.setState({vehicle: res.data});
        })
    }

    cancel(){
        this.props.history.push('/vehicles');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Vehicle Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Vehicle Id: </label>
                            <div> { this.state.vehicle.id }</div>
                        </div>
                       
                        <div className = "row">
                            <label> Vehicle Model: </label>
                            <div> { this.state.vehicle.model }</div>
                        </div>
                        <div className = "row">
                            <label> Vehicle Cost: </label>
                            <div> { this.state.vehicle.cost }</div>
                        </div>
                        <div className = "row">
                            <label> Company: </label>
                            <div> { this.state.vehicle.company }</div>
                        </div>
                    </div>
                    <button onClick={ () => this.cancel()} className="btn btn-info"> Back </button>
                </div>
                

            </div>
        )
    }
}

export default ViewVehicleComponent
