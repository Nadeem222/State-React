import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import mainPic from "./Img/profile.jpg";
import svgPic from "./Img/download.png";
import hahaPic from "./Img/hahaha.png";
import likePic from "./Img/like.png"
// let myNum = 5;

// let plus = () => {
//   ++myNum;

//   console.log(myNum);
// }

function App() {
  const [data , setData] = useState(0);
  const [isLit , setLit] = useState(0);


  let changeState = () => {
    setData(data + 1 );
    console.log("data", data) ;
  }

  let changeTheme = () =>{
    setLit(!isLit);
  }
  const Hi = ({name, date , text , imageUrl}) =>( 


    <div className="post">
      <div className="profile">
        <div className="left">
         <img src={mainPic} alt="" />
        </div>
        <div className="right">
          <h2>{name}</h2>
          <span>{date}</span>
        </div>
      </div>
      <br/>
      <p>{text}</p>
      <img
        width="100%"
        src={imageUrl}
        alt=""
       />  
        <hr />
        <hr />
      <div className="buttons">
        <p className="data"><img  src={svgPic } alt="" /><img  src={likePic } alt="" /><img  src={hahaPic } alt="" />{data}</p>
        <hr />
        <button onClick={changeState} >Like</button>
        <button>Comments</button>
        <button>Share</button>
        <input placeholder="Write Comments"/>
      </div>
    </div>
    );

  return (
  <div className={!isLit ? "Dark" : ""}>
        {/* <p> 
          Hello world {myNum}
        </p>
        <button onClick={plus}>Plus</button> */}

        {/* <p> 
         State Variables {data}
        </p> */}
        {/* <button onClick={changeState}>Plus</button> */}

        {/* <div>Room Is {(isLit) ? "Lit" : "Dark"}</div> */}
        <button onClick={changeTheme}>Dark Mode</button>
       
  <Hi 
    name="Nadeem" 
    date= " 1 jan 2023" 
    imageUrl="https://media.istockphoto.com/id/632443888/photo/founder-of-pakistan-jinnahs-tomb-called-mazar-e-quid-karachi.jpg?b=1&s=170667a&w=0&k=20&c=IWa11lLbA-cbZopeLyAc6-Lzi92WGilX84g6yuR_1Ww="
    text="Mazar-e-Quaid, also known as Jinnah Mausoleum or the National Mausoleum, is the final resting place of Muhammad Ali Jinnah, the founder of Pakistan. Designed in a 1960s modernist style, it was completed in 1971, and is an iconic symbol of Karachi as well as one of the most popular tourist sites in the city."
    />
  <Hi 
    name="Nadeem"
    date="2 jan 2023"  
    imageUrl="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/325952857_708168224333041_4911941561469231355_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG9UiBJ3c-JWtMFokPKO47CYj_APxXgBYliP8A_FeAFie-HIlOLOhPQmYk8iOAHO0oW1rnV90ECYUHgwayzz4U6&_nc_ohc=nzxcJpHxk5IAX-yt81-&_nc_ht=scontent.fkhi11-2.fna&oh=00_AfBI4jCduxjTzNY6Q2iBedfULoQ9X8WTZ5Th4gKVVNj-uA&oe=63CB3BCD" 
    text="Alhamdulillah another campus has been Inducted in SMIT. A seminar has been conducted in our newly built campus at Saylani Headofice. An interactive seminar has been conducted to enhance students communication skills & IT skill set. Stay connected with us.
    #SaylaniMassTrainingProgram
    #SpreadSaylani
    #SaylaniWelfareInternationalTrust
    #LetsBuildPakistantogether
    #freeiteducation 
    #SMITHeadoffice
    #Topquailityenvironment
    #studentsdevelopment"
  />
  <Hi name="Nadeem"
      date="18 jan 2023"
      imageUrl={"https://pbs.twimg.com/media/FiqPFixWAAAc97p.jpg"}
      text="lorem6"
      />
     
  <Hi name="Nadeem"
      date="25 nov 2022"  
      imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZKe149HmeyZDEJZp4bUSjLdzUxlaBwUjrw&usqp=CAU"}
      text="Clifton Beach Karachi is without any doubt the most visited place in the Karachi by residents and tourists for leisure and picnic. Commonly known as Sea View, this beach on Arabian Sea is open to public 24/7 and 365 days a year. I have visited Sea View multiple times, either for dinning, shopping or for activities as well. These all are covered in this post."/>
  </div>
  
  );
}

export default App;
