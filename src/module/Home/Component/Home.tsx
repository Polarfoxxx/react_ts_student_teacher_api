
import "../style/Home.style.css"

function Home(): JSX.Element { // NOTE: pouzivaj konvenciu ze pages maju na konci Page
      return (
            <div className="Home">
                  <div className="homeTxt">
                        <p>This site is intended for teachers of auxiliary schools. For the registration of problem pupils in primary and secondary institutions</p>
                        <p>We ask all users to comply with the rules according to the applicable laws on privacy protection.. The administrator of the site is not responsible for the leakage of information..!</p>
                  </div>
                  <div className="homeImg">
                        <img src="../../../../img/teacher.png" alt="" /> // BAD: cesta je /img/teacher.png pretoze to mas v public folderi + naco tam ams alt ked neni viplneni?
                  </div>
            </div>
      )
}

export default Home