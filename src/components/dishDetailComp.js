import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state={
            selectedDish: null
        }

    }

    onDishSelect(dish){
        this.setState({ selectedDish: dish });
    }

    renderDetails(dish){
        if(dish!=null){
            const queries = dish.comments.map((q)=>
                <div>
                    {q.comment}<br/><br/>
                    --{q.author} , {q.date}<br/><br/>
                </div>
            );

            return(
                <div className="col-8 col-md-5 col-sm-8 m-2">
                    <Card>
                        <CardTitle><h3>Comments</h3></CardTitle>
                        <CardBody>{queries}</CardBody>
                    </Card>
                    
                </div>      
            );
        }
        
        else{
            return(
                <div></div>
            );
        }
    }
    
    renderDish(dish){

        if(dish!=null){
            const queries = dish.comments.map((q)=>
                <ul>{q.comment}
                <ul>{q.author},{q.date}</ul>
                </ul>
            );
            return(
                <div className="col-8 col-md-5 m-1">
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );

        }

        else{
            return(
                <div></div>
            );
        }
    }

    render(){

        const menu= this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-8 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
                
            );
        });

        
        const query= this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-8 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
                
            );
        });

        return (
           <div classname="container">
               <div className="row">
                  {menu}
               </div>
               <div className="row">
                   {this.renderDish(this.state.selectedDish)}
                   {this.renderDetails(this.state.selectedDish)}
               </div>
           </div>
        );
    }
}

export default Menu;