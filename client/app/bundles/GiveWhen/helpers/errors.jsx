export default {

  toErrorMessages (errors) {
    const errorsToNames = {
      'email': 'email',
      'firstName': 'first name',
      'lastName': 'last name',
      'address': 'address',
      'city': 'city',
      'zip': 'ZIP code',
      'phone': 'phone number',
      'occupation': 'occupation',
      'employer': 'employer'
    };

    return errors.map((error) => {
      return  `Please enter your ${errorsToNames[error]}.`;
    });
  }

}
