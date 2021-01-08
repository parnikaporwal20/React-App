import React, { Component } from 'react'; 

export default class ProvideComponent extends Component {
     
    render(){
        return   (<div className="col-md-12">
        {this.props.serviceProviders && this.props.serviceProviders.length > 0 ? this.props.serviceProviders.map((sp,index) => {
            return <div className="col-md-12" style={{ padding: "10px", border: "1px solid #ccc",margin:"10px 0px" }} key={index}>
                <div className="col-md-3">
                    <img style={{ maxHeight: "125px" }} src={sp.attributes["profile-image"] || "noimage.png"} alt={sp.attributes.name}></img>
                </div>
                <div className="col-md-9">
                    <p><strong>Name:&nbsp;</strong>{sp.attributes.name}</p>
                    <p><strong>Sub-Specialties:&nbsp;</strong> {sp.attributes.subspecialties && sp.attributes.subspecialties.length > 0 ?
                        <span>{sp.attributes.subspecialties.join(",")}</span>
                        : <>NA</>}</p>
                </div>
            </div>

        }) : <><center>{this.props.serviceName && this.props.serviceName.length > 0 ? "No Providers Found" : "Please select Service"}</center></>}
    </div>)
    }
}