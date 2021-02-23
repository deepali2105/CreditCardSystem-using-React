import React, { Component } from 'react'
import VehicleService from '../services/VehicleService'


class CreateVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            model: '',
            cost: '',
            company: '',
            modelError:"",
            costError:"",
            companyError:""
        }

        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.saveOrUpdateVehicle = this.saveOrUpdateVehicle.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            VehicleService.getVehicleById(this.state.id).then( (res) =>{
                let vehicle = res.data;
                this.setState({model: vehicle.model,
                    cost: vehicle.cost,
                    company : vehicle.company
                });
            });
        }        
    }

    validate = () =>{
       let modelError = "";
        let costError = "";
        let companyError = "";

        if(this.state.model.length == 0 || this.state.model == ""){
            modelError = "Model should not be empty";
        }

        if(modelError){
            this.setState({modelError});
            return false;
        }

        if(this.state.cost.length == 0 || this.state.cost == ""){
            costError = "Cost should not be empty";
        }

        if(costError){
            this.setState({costError});
            return false;
        }

        if(this.state.company.length == 0 || this.state.company == ""){
            companyError = "Company should not be empty";
        }

        if(companyError){
            this.setState({companyError});
            return false;
        }

        return true;
    }

    saveOrUpdateVehicle = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state);
        }
        let vehicle = {model: this.state.model, cost: this.state.cost, company: this.state.company};
        console.log('vehicle => ' + JSON.stringify(vehicle));

        // step 5
        if(this.state.id === '_add'){
            VehicleService.createVehicle(vehicle).then(res =>{
                this.props.history.push('/vehicles');
            });
        }else{
            VehicleService.updateVehicle(vehicle, this.state.id).then( res => {
                this.props.history.push('/vehicles');
            });
        }
    }
    
    changeModelHandler= (event) => {
       this.setState({model: event.target.value});
    }

    changeCostHandler= (event) => {
        this.setState({cost: event.target.value});
    }

    changeCompanyHandler= (event) => {
        this.setState({company: event.target.value});
    }

    cancel(){
        this.props.history.push('/vehicles');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Vehicle</h3>
        }else{
            return <h3 className="text-center">Update Vehicle</h3>
        }
    }
    render() {

        return (
           
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Model: </label>
                                            <input placeholder="Model" name="model" className="form-control" 
                                                value={this.state.model} onChange={this.changeModelHandler} />
                                        </div>
                                        <span style={{color: "red"}}>{this.state.modelError}</span>

                                        {/* {this.state.modelError?
                                        (<div style={{fontSize:12,color:"red"}}>
                                        {this.state.modelError}</div>):null} */}
                                        
                                        <div className = "form-group">
                                            <label> Cost: </label>
                                            <input placeholder="cost" name="cost" className="form-control" 
                                                value={this.state.cost} onChange={this.changeCostHandler}/>
                                        </div>
                                        <span style={{color: "red"}}>{this.state.costError}</span>
                                        <div className = "form-group">
                                            <label> Company: </label>
                                            <input placeholder="company" name="company" className="form-control" 
                                                value={this.state.company} onChange={this.changeCompanyHandler}/>
                                        </div>
                                        <span style={{color: "red"}}>{this.state.companyError}</span>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateVehicle}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateVehicleComponent