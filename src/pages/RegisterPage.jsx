import RegisterInput from '../components/RegisterInput';
import chitchat2 from '../images/chitchat2.png';

function RegisterPage() {
  return (
    <div className="bg-[#f3d2c1] min-h-screen flex">
      <div className="w-1/2 bg-[#fef6e4] flex justify-center items-center">
        <img src={chitchat2} alt="logo" className="mx-auto" />
      </div>
      <RegisterInput />
    </div>
  );
}

export default RegisterPage;
