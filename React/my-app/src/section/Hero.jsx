import myHero from "../style/Hero.module.css";
import Button from '../components/button';
const Hero = () => {
  return (
    <section className={myHero.hero}>
      <h2>Welcome to My App</h2>
      <p>This is a simple hero section.</p>
      <Button label="Get Started" onClick={() => alert('Button clicked!')} />
    </section>
  );
};

export default Hero;