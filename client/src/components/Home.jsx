import NavBar from "./done/navbar";
import Header from "./header";
import LogIn from "./login";

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <Header />
      </div>
      <div id="home-container">
        <h1> Welcome!</h1>
        <h1>Ready for Movie Night? </h1>
      </div>
      <div>
        <LogIn />
      </div>
    </>
  );
}
