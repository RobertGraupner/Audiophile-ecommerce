export interface CustomFormData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;

  name_user?: string;
  email_user?: string;
  password_user?: string;
}
