import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_alcoholContent.value);
    console.log(_image.value);
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, image: _image.value});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _image.value = '';
  }


  return (
    <div>
      <h1 className="subtitle">NewKegForm Works</h1>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Beer Name"
          ref={(input) => {_name = input;}}/>
        <input
          type="text"
          id="brand"
          placeholder="Brand"
          ref={(input) => {_brand = input;}}/>
        <input
          type="number"
          id="price"
          placeholder="Price"
          ref={(input) => {_price = input;}}/>
        <input
          type="number"
          id="alcoholContent"
          placeholder="Alcohol Content"
          ref={(input) => {_alcoholContent = input;}}/>
        <input
          type="text"
          id="image"
          placeholder="Image URL"
          ref={(input) => {_image = input;}}/>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;

// Keg.propTypes = {
//   name: PropTypes.string,
//   brand: PropTypes.string,
//   price: PropTypes.number,
//   alcoholContent: PropTypes.number,
//   image: PropTypes.string
// };
