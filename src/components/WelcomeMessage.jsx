

const WelcomeMessage=({onBtnClick})=>{


    return <div className="welcome-msg">
     <h1>There is no posts</h1>
     <br />
     <button onClick={()=>onBtnClick()} type="button" className="btn btn-primary">Fetch Posts from Server</button>
     </div>


}

export default WelcomeMessage;