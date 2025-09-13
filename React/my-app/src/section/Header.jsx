import myHead from '../style/Header.module.css';

const Header = () => {
  return (
    <header className={myHead.header}>
      <h1 className={myHead.logo}>My App</h1>
        <nav lassName={myHead.nav}>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;