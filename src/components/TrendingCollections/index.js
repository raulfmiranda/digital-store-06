import Camisa2 from './assets/Camisa2.png';
import Calca from './assets/Calca.png';
import Headset from './assets/Headset.png';
import Tenis from './assets/Tenis.png';
import './style.css';

export default function TrendingCollections() {
    return (
        <div>
            <div class="destaque">
                <h2>Coleções em destaque</h2>
            </div>
            <div id="chuchu" className='flex'>
            <div id="container">
                <img src={Camisa2 }/>
                <p class="cor-fonte">Camisetas</p>
            </div>
            <div id="container">
                <img src={Calca }/>
                <p class="cor-fonte">Calças</p>
            </div>
            <div id="container">
                <img class="cachorro" src={Calca }/>
                <p class="cor-fonte">Bonés</p>
            </div>
            <div id="container">
                <img src={Headset }/>
                <p class="cor-fonte">Haadphones</p>
            </div>
            <div id="container">
                <img src={Tenis }/>
                <p class="cor-fonte">Tênis</p>
            </div>
        </div>    
        </div>
    );
}