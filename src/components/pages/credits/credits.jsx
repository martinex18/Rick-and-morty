/* ====== Styles ====== */
import './credits.css'
/* ====== Hooks ====== */
import { useTypewriter } from 'react-simple-typewriter'
/* ====== JS ====== */
import networks from './networks'
/* ====== Components ====== */
import Menu from '../../menu/menu'

const Credits = () => {

    const [dev] = useTypewriter({
        words: ['Gabriel Martinez', 'a Frontend developer'],
        loop: {},
        typeSpeed: 120
    });

  return (
    <>
        <Menu />
        <section className='credist'>
            <div className='credist_dev'>
                <h1>
                    I am{' '}
                    <span>{dev}</span>
                </h1>
                <div className='credist_networks'>
                    { networks.map((network, index) => {
                        return(
                            <div className='credist_network' key={index}>
                                <h3>Visit {network.name}</h3>
                                <div className='credist_icon'>
                                    <a href={network.url}>{network.user}</a>
                                    <box-icon type='logo' name={network.icon} color={network.color}></box-icon>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <hr />

            <div className='credist_api'>
                <h3>
                    API provided by{' '}
                    <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">
                        Rick and Morty API
                    </a>
                </h3>
            </div>
        </section>
    </>
  )
}

export default Credits