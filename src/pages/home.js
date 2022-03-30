import HomeCarousel from "../components/homeCarousel";
import '../App.css'
import p1 from '../per1.jpg'
import p2 from '../per2.jpg'
import p3 from '../per3.jpg'
import HomeCard from "../components/homeCard";

function Home(){
    const trainers= [
        {
            title:"Julie",
            text:"Julie has been with us for 5 years.",
            link:"https://www.tonal.com/wp-content/uploads/2020/03/Img1_lifestyle.jpg",
        },
        {
            title:"Samuel",
            text:"Samuel has been with us for 3 years.",
            link:"https://www.verywellfit.com/thmb/IIEwJmMNp_JhVB7IFaXZhqf0IvQ=/fit-in/1200x800/filters:no_upscale():max_bytes(150000):strip_icc()/tonalsystem-35d1fa9db6fe4f5aaf58735093a7c74f.jpg",
        },
        {
            title:"Paul",
            text:"Paul has been with us for 8 year",
            link:"https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbmFsJTIwdHJhaW5lcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        }
    ]

    const equipments= [
        {
            title:"Leg musculator",
            text:"Improve your leg muscles",
            link:"https://eadn-wc02-2269861.nxedge.io/cdn/media/catalog/product/cache/7ab546a556185a78130d3def37a6ee31/x/e/xe195_wmodel_side_web.jpg",
        },
        {
            title:"Run machine",
            text:"Help you build a good cardio",
            link:"https://sc04.alicdn.com/kf/H04a853afdc534abba9e26806e167b465F.jpg",
        },
        {
            title:"Muscle machine",
            text:"Get your dream shape",
            link:"https://image.made-in-china.com/2f0j00JvQUPKSIZHqL/Home-Gym-Equipment-Fitness-Machine-Home-Exercise-Machine-Mantanice-Free-Strength-Machine-Home-Gym.jpg",
        }
    ]
    return(
        <div className="homeCarousel">
            <h1>Welcome to GYM, our mission is to help you keep good form.</h1>
            <br/>
            <h1>Our team </h1>
            <HomeCard arr={trainers}/>
            <h1>Our equipments</h1>
            <HomeCard arr={equipments}/>
            <br/>

        </div>

    );
}

export default Home;