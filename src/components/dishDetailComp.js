import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

   function RenderComments({Comments})
   {
       

        if(Comments!=null){

        const Cmt = Comments.map((comment)=> {
            return(
            <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>
            );
         })
            return (
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                {Cmt}
                </ul>
                </div>
            );
        }
        
        else
        return(
            <div></div>
        );

    }

    function RenderDish({dish}) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }

    const Dishdetail = (props) => {
        if(props.dish!=null)
        return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className = "row">
                            <RenderDish dish={props.dish} />
                            <RenderComments Comments={props.comments}/>
                    </div>
                </div>
        );
        else
        return(
            <div></div>
        );
    }

export default Dishdetail;