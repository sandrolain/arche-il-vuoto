import Link from "next/link";

export default function Header() {
  return (
    <>
      <style jsx>{/*css*/`
        header {
          background: #000 radial-gradient(var(--main-color-md), var(--main-color-d));
          color: #FFF;
        }
        header > div {
          max-width: 600px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
        }
        header h1 {
          margin: 0;
          padding: 16px;
          font-family: 'Amatic SC', cursive;
          letter-spacing: 0.1em;
          font-weight: normal;
          font-size: 48px;
          line-height: 1em;
          position: relative;
        }
        header h1 span {
          display: block;
          font-size: 18px;
          line-height: 1em;
          letter-spacing: 0.38em;
        }
        header h1::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 4px;
          position: absolute;
          left: calc(50% - 4px);
          top: calc(50% - 4px);
          transform: rotate(var(--main-color-hue)) translate(0.8em);
          box-shadow: 0 0 2px #FFF, 0 0 4px #FFF, 0 0 8px #FFF;
        }
        nav {
          padding: 16px;
        }
        a {
          text-decoration: none;
          color: #FFF;
        }
        nav a {
          text-align: center;
          display: inline-block;
        }
      `}</style>
      <header>
        <div>
          <div>
            <Link href="/">
              <a><h1>ARCHÈ <span>IL VUOTO</span></h1></a>
            </Link>
          </div>
          <nav>
            <Link href="https://www.sandrolain.com">
              <a>I am a<br/>Developer</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
