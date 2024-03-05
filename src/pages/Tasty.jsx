import Marquee from "react-fast-marquee";


function Tasty () {
    return(         
        <section className="tasty rel">
            <Marquee speed="100" className="tasty_flow flow_container abs">
                <span className="flow_item" style={{width: '2455px'}}><img src="/img/page/fran/tasty_fl.png" alt="" /></span>
            </Marquee>
            <div className="tasty_img bg-cover bg-full" style={{zIndex: '10'}}></div>
        </section>    
    );
}

export default Tasty;