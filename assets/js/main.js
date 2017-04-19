var objetoCaja=[{size1:'200', color1:'red', size2:'100', color2:'purple', size3:'50', color3:'yellow'},
                {size1:'200', color1:'blue', size2:'100', color2:'green', size3:'50', color3:'black'}];

window.addEventListener('load',function(){
  var contenedor=document.createElement('section');
  contenedor.setAttribute("class",'contenedor');

  objetoCaja.forEach(function(e){
    var cajaPadre=document.createElement('div');
    var cajaHijo=document.createElement('div');
    var cajaNieto=document.createElement('div');

    cajaPadre.setAttribute("id",e.color1);
    cajaPadre.setAttribute("class","caja"+e.size1);
    cajaHijo.setAttribute("id",e.color2);
    cajaHijo.setAttribute("class","caja"+e.size2);
    cajaNieto.setAttribute("id",e.color3);
    cajaNieto.setAttribute("class","caja"+e.size3);

    cajaHijo.appendChild(cajaNieto);
    cajaPadre.appendChild(cajaHijo);
    contenedor.appendChild(cajaPadre);
  });
  document.body.appendChild(contenedor);

});
