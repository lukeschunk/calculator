import React, { Component } from 'react';
import calculatorImage from '../calculator.png'

class Calculator extends Component {
  constructor () {
    super();

    this.state = {
      header: 'Calculator is Cool',
      num1: '',
      num2: '',
      operator: ''
    }
  }

  onNumberClick = (num) => {
    if (!this.state.operator) {
      this.setState({ num1: this.state.num1 + num})
    } else {
      this.setState({ num2: this.state.num2 + num})
    }
  }

  onOperatorChange = (operator) => {
    if (!this.state.operator) {
      this.setState({ operator })
    } else {
      this.setState({
        num1: Number(this.state.num1) + Number(this.state.num2),
        operator: ''
      })
    }
  }


  // onNumberClick = (num) => {
  //     this.setState({
  //       display: this.state.display + num
  //     })
  // }
  //
  // onOperatorChange = (operator) => {
  //   if (!this.state.operator) {
  //     this.setState({
  //       operator,
  //       storedNum: this.state.display,
  //     })
  //   } else {
  //     let x = Number(this.state.storedNum);
  //     let y = Number(this.state.display);
  //      switch (this.state.operator) {
  //        case '+':
  //          this.setState({
  //            display: x + y,
  //            operator: ''
  //          })
  //          break;
  //        default:
  //      }
  //   }
  //
  //
  //   let result;
  //   switch (this.state.operator) {
  //     case '+':
  //       result = this.state.display + this.state.storedNum;
  //       break;
  //
  //     case '=':
  //       this.setState({ display: result })
  //       break;
  //
  //   }
  //
  //   this.setState({
  //     operator //es6 syntax, same as operator: operator
  //   })
  // }

  render () {
    return (
      <div id="calculator-container">
        <input id="header-input"/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImage} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.num1 ? this.state.num1 : this.state.num2}</span>
          </div>

          <div className="btn clear" onClick={() => this.setState({ num1: ''})}></div>

          <div className="btn zero" onClick={() => this.onNumberClick('0')}></div>
          <div className="btn one" onClick={() => this.onNumberClick('1')}></div>
          <div className="btn two" onClick={() => this.onNumberClick('2')}></div>
          <div className="btn three" onClick={() => this.onNumberClick('3')}></div>
          <div className="btn four" onClick={() => this.onNumberClick('4')}></div>
          <div className="btn five" onClick={() => this.onNumberClick('5')}></div>
          <div className="btn six" onClick={() => this.onNumberClick('6')}></div>
          <div className="btn seven" onClick={() => this.onNumberClick('7')}></div>
          <div className="btn eight" onClick={() => this.onNumberClick('8')}></div>
          <div className="btn nine" onClick={() => this.onNumberClick('9')}></div>

          <div className="btn equal" onClick={() => this.onOperatorChange('=')}></div>
          <div className="btn multiply" onClick={() => this.onOperatorChange('*')}></div>
          <div className="btn divide" onClick={() => this.onOperatorChange('/')}></div>
          <div className="btn subtract" onClick={() => this.onOperatorChange('-')}></div>
          <div className="btn add" onClick={() => this.onOperatorChange('+')}></div>
        </div>
      </div>
    )
  }
}

export default Calculator;
