import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setlinea1] = useState(''); 
  const [linea2, setlinea2] = useState(''); 
  const [imagen, setImagen] = useState(''); 

  const onChangeLinea1 = function(evento) {
    
    setlinea1(evento.target.value);
  }
  const onChangeLinea2 = function(evento) {
    
    setlinea2(evento.target.value);
  }
  const onChangeImagen = function(evento) {
    
    setImagen(evento.target.value);
  }
  const onClickExportar = function(evento) {
    alert('Presione OK para exportar imagen jpg')

    html2canvas(document.querySelector("#img")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'img.png';
      link.href = img;
      link.click();
    }
  ); 
}
  
  return (
    <div className="App">

      <p className='title'>1. Elija una imagen</p>

     <select onChange={onChangeImagen} >
       <option className='option' value="imagen1">Imagen 1</option>
       <option className='option' value="imagen2">Imagen 2</option>
       <option className='option' value="imagen3">Imagen 3</option>
       <option className='option' value="imagen4">Imagen 4</option>
       <option className='option' value="imagen5">Imagen 5</option>
       <option className='option' value="imagen6">Imagen 6</option>
       <option className='option' value="imagen7">Imagen 7</option>
       <option className='option' value="imagen8">Imagen 8</option>
       <option className='option' value="imagen9">Imagen 9</option>
       <option className='option' value="imagen10">Imagen 10</option>
     </select> <br /> 

     <p className='title'> 2. Ubique textos a gusto</p>

    <input onChange={onChangeLinea1} type="text" placeholder='Primer texto'/> <br/>
    <input onChange={onChangeLinea2} type="text" placeholder='Segundo texto'/> <br/>

    <br />
    <p className='subtitle'> 3. Descargue su imagen <br/> haciendo click en exportar</p>
    <button className='btn' onClick={onClickExportar}> Exportar </button>

   
      <div id='img'>

        <span className='span1'>{linea1}</span> <br/> <br/>
        
        <span className='span2'>{linea2}</span>

        <img className='img' src={"/img/" + imagen + ".jpg"} />
      

      </div>

    </div>
  );
}

export default App;
