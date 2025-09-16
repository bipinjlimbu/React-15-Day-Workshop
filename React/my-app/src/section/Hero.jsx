import myHero from "../style/Hero.module.css";
import Button from '../components/button';
import {useState} from 'react';
const Hero = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className={myHero.hero}>
      <h2>Welcome to My App</h2>
      <p>This is a simple hero section.</p>
      <input value={email} onChange={handleInputChange} placeholder="Enter your email" />
      <Button onClick={() => alert(`Email submitted: ${email}`)}>Get Started</Button>
    </section>
  );
};

export default Hero;