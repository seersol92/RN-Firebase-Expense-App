import {  createStackNavigator } from 'react-navigation';
import LoginScreen from './../screens/auth/LoginScreen';
import RegisterScreen from './../screens/auth/RegisterScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';


const AuthNavigator = createStackNavigator({ 
  Login: LoginScreen,
  Register: RegisterScreen,
  ForgotPassword: ForgotPasswordScreen
 },  {
  initialRouteName: 'Login'
}
);

export default AuthNavigator