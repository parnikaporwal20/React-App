import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchProviders } from '../actions/providerAction';
import { fetchServices } from '../actions/serviceAction';
import ProvideComponent from './ProviderComponent';

class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            servicesLoaded: false,
            providersLoaded: false,
            serviceProviders: []

        }

    }
    componentDidMount() {
        this.props.getServices().then(res => {
            if (res) {

                this.setState({
                    servicesLoaded: true
                });
            }
        })
        this.props.getProviders().then(res => {
            if (res) {
                this.setState({
                    providersLoaded: true
                });
            }
        })
    }
    showProviders = (serviceName) => {
        this.setState({
            serviceName: serviceName
        });
        if (this.props.providers && this.props.providers.data &&
            this.props.providers.data.length > 0 && this.props.providers.included &&
            this.props.providers.included.length > 0) {
            let providerIncludedList = this.props.providers.included.filter(include => include.attributes.service === serviceName);
            let providers = this.props.providers.data.filter(t => t.relationships.schedules.data.filter(s => providerIncludedList.findIndex(p => p.id === s.id) > -1).length > 0);
            this.setState({
                serviceProviders: providers

            });
      
        }
    }
    render() {

        return (
            <div style={{ padding: "20px" }}>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="panel panel-primary">
                            <div className="panel-heading">Services</div>
                            <div className="panel-body">
                                <div className="navbar navbar-default">
                                    <ul className="nav flex-column mb-0">
                                        {this.props.services && this.props.services.data && this.props.services.data.length > 0 ? Array.from(new Set(this.props.services.data.map(service => service.attributes.name))).map((service,index) => {
                                            return <li className={`nav-item`} key={index}>
                                                <a href="#" className={`nav-link`} style={{ backgroundColor: service === this.state.serviceName ? "#ccc" : "" }} onClick={() => this.showProviders(service)}>
                                                    {service}
                                                </a>
                                            </li>
                                        }) : <></>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Providers</div>
                            <div className="panel-body">
                                 <ProvideComponent serviceProviders={this.state.serviceProviders} serviceName={this.state.serviceName} >
                                 </ProvideComponent>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    services: state.services.services,
    providers: state.providers.providers
})

const mapDispatchToProps = (dispatch) => {
    return {
        getServices: () => {

            return new Promise((resolve, reject) => {
                dispatch(fetchServices()).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error);
                })
            })
        },
        getProviders: () => {
            return new Promise((resolve, reject) => {
                dispatch(fetchProviders()).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error);
                })
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);