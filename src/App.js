import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, setColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/camila-mcr.png",
    nombre: "Camila",
    puesto: "Estudiante ONE-Alura G5",
    favorito: true,
  }
  // {
  //   id: uuidv4(),
  //   equipo: "Programación",
  //   foto: "https://github.com/harlandlohora.png",
  //   nombre: "Harland",
  //   puesto: "Instructor",
  //   favorito: false,
  // },
  // {
  //   id: uuidv4(),
  //   equipo: "UX y Diseño",
  //   foto: "https://github.com/harlandlohora.png",
  //   nombre: "Manuel",
  //   puesto: "Instructor",
  //   favorito: false,
  // },
  // {
  //   id: uuidv4(),
  //   equipo: "Programación",
  //   foto: "https://github.com/harlandlohora.png",
  //   nombre: "Paul",
  //   puesto: "Instructor",
  //   favorito: false,
  // },
]);

  //Lista de equipos
  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
    ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador);
    setColaboradores([...colaboradores, {...colaborador, id: uuidv4()}]); //Spread operator
  };

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  //Actualizar color de equipo

  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      };
      return equipo;
    });

    setEquipos(equiposActualizados);
  };


  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  };

  //Dar like
  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito;
      };
      return colaborador
    });

    setColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {/* condición ? verdadero : false
      condicion && verdadero */}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearEquipo = {crearEquipo}
      />}

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {equipos.map((equipo) => {
        return <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
      })}

      <Footer />
    </div>
  );
}

export default App;
