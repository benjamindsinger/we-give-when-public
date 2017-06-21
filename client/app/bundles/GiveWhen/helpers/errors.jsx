export default {

  toErrorMessages (errors) {
    const errorsToNames = {
      'email': 'your email',
      'firstName': 'your first name',
      'lastName': 'your last name',
      'address': 'your address',
      'city': 'your city',
      'zip': 'your ZIP code',
      'phone': 'your phone number',
      'occupation': 'your occupation',
      'employer': 'your employer',
      'zip_numeric': 'a numeric zip code',
      'zip_five': 'a 5-digit zip code',
      'email_valid': 'a valid email',
      'address_length': 'a valid address',
      'phone_length': 'a valid phone number (at least 10 digits)',
      'state_length': 'a two-digit state abbreviation'
    };

    return errors.map((error) => {
      return  `Please enter ${errorsToNames[error]}.`;
    });
  }

};
