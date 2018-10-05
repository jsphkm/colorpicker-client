import React from 'react';
import './input.css';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }
  
  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className="form-warning">{this.props.meta.warning}</div>
      );
    }

    return (
      <div className="form-input-container">  
        <input
          // ref={nameInput => (this.props.af ? this.input = nameInput : '')}
          className="form-input"
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
          autoComplete={this.props.autocomplete}
          placeholder={this.props.label}
        />
        <label htmlFor={this.props.input.name} className="form-input-label">
          {this.props.label}
        </label>
        <div className="form-input-errors">
          {error}
          {warning}
        </div>
      </div>
    )
  }
}