export class Client {
  id: number = 1;
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  gender: string = '';
  address: string = '';
  city: string = '';
  zip: string = '';
  country: string = '';
  login: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(
    firstName: string = '',
    lastName: string = '',
    email: string = '',
    phone: string = '',
    address: string = '',
    city: string = '',
    gender: string = '',
    zip: string = '',
    country: string = '',
    login: string = '',
    password: string = '',
    confirmPassword: string = ''
  ) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.gender = gender;
    this.zip = zip;
    this.country = country;
    this.login = login;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
