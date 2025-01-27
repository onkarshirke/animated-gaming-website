import './credit.scss'
import { useRef, useEffect } from 'react'
import { bgVideo } from '../../../assets/videos'
import Button from '../../button/Button'

const Credit = props => {

    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.play()
        const pauseVideo = () => {
            if (!document.hidden) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
        document.addEventListener('webkitvisibilitychange', pauseVideo)
        return () => {
            document.removeEventListener('webkitvisibilitychange', pauseVideo)
        }
    }, []);

    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                width="100%"
                height="auto"
                loop={true}
                className="overlay"
            >
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className="credit__content">
                <div className="title">
                    <span>Start Your</span>
                    <h2 className="main-color">GTA VI</h2>
                </div>
                <div className="btns m-t-4">
                <a href="https://www.rockstargames.com/VI" target="_blank">
                <Button className="btn-main">PLAY NOW</Button>
                </a>
                <a href="https://www.gtavice.net" target="_blank">
                <Button className="btn-second">GET STARTED</Button>
                </a>
                </div>
            </div>
            {/* Footer with copyright notice */}
            <footer className="credit-footer">
                <p className="copyright-text">© 2025 Onkar.Dev   |   All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Credit