import myHero from "../style/Hero.module.css";
const Hero = () => {
  return (
    <section className={myHero.hero}>
      <h2>Welcome to My App</h2>
      <p>This is a simple hero section.</p>
    </section>
  );
};

export default Hero;