import React from "react";
import { Input, Label } from "./Filter.Styled";
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
 
    <Label>Find contact by name<Input type = "text" value ={value} onChange = {onChange}/>
</Label>

);
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
