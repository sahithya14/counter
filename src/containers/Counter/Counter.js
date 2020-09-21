import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from "react-redux";

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAdd}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract}  />
                <hr/>
                <button onClick ={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.resultObjArr.map(resultObj=>{
                    return <li key={resultObj.id} onClick ={()=>{this.props.onDeleteResult(resultObj.id)}}>{resultObj.resValue}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const MapStateToProps =(state)=>{
   return{ ctr:state.counter,
       resultObjArr:state.results} 
}
const MapDispatchToProps=(dispatch)=>{
    return{
        onIncrementCounter:()=>{
            return dispatch({type:"INCREMENT"})
        },
        onDecrementCounter:()=>{
            return dispatch({type:"DECREMENT"})
        },
         onAdd:()=>{
            return dispatch({type:"ADD",val:10})
        },
        onSubtract:()=>{
            return dispatch({type:"SUB",val:5})
        },
        onStoreResult:()=>{
            return dispatch({type:"STORE_RESULT"})
        },
        onDeleteResult:(resObjId)=>{
             return dispatch({type:"DEL_RESULT",resultId:resObjId})
        }
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Counter);