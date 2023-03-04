import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

class Button extends Component {
  render() {
    const { label = '', onClick, disabled = false,
      id = '', value = '', className = '', img = '' } = this.props;
    return (
      <S.Button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
        value={ value }
        className={ className }
        data-testid={ id }
        src={ img }
      >
        { label }
        {img && (<S.Image
          src={ img }
          alt={ value }
        />)}
      </S.Button>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  img: PropTypes.string,
};

Button.defaultProps = {
  id: '',
  value: '',
  className: '',
  disabled: false,
  img: '',
};
