import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import styled from 'styled-components';
const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        {/* <img src={logo} alt='library' className='logo' /> */}
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
             <span>Super</span> Library
          </h1>
          <p>
          I'm baby blue bottle pabst pinterest pour-over. Cred distillery heirloom photo booth forage green juice. Actually seitan franzen church-key keytar banjo pug pinterest tattooed affogato. Tumeric kickstarter skateboard, gastropub vegan tousled taiyaki gorpcore. Bitters food truck unicorn, marxism tousled +1 wolf.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login
          </Link>
        </div>
        <img src={main} alt='book hunt' className='img main-img' />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;