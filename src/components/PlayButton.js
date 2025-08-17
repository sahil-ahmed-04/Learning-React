import "./PlayButton.css"

function playButton({children,message,onSmash,onPlay, onPause}){
        let playing = false;
        function handleClick(e){
            console.log(e)
            e.stopPropagation()
            e.preventDefault()
            
            if(children==='Say Hello'){
                onSmash(message)
            }else{
                if(playing) onPause();
                else onPlay();
                playing = !playing   
            }
        } 
        
    return(
        <button onClick={handleClick}>{children}</button>
    )
}
export default playButton;