import Button from 'react-bootstrap/Button'
import "./Consultant.css"
const Consultant = ()=>{
return(
    <div className = "parent_div_consultant">
        <Button>Go Back</Button>
        <div className = "consult_desc">
            <div className = "circle">
            </div>
            <div className = "consult_detail">
                <h4>Consultant/Volunteer Name</h4>
                <span className = "icons">
                 <a href = "https://twitter.com/BillGates" target = "_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                 <a href = "https://www.instagram.com/thisisbillgates/?hl=en" rel="noreferrer" target = "_blank" > <i className="fab fa-instagram"></i></a>
                 <a href = "https://www.facebook.com/BillGates/" target = "_blank" rel="noreferrer" ><i className="fab fa-facebook-f"></i></a>
                <i className="fab fa-medium-m"></i>
                </span>
                <p>Description of the user and more <br/> details of the user / consultant /<br/> volunteer.</p>
                <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit.</p>
            </div>
        </div>
    </div>
)


}

export default Consultant