import { useState, FormEvent } from 'react';
export default function FormularioContacto() {
  const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [carrera, setCarrera] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);

    const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre}, Carrera: ${carrera} Correo: ${correo} Mensaje: ${mensaje}`);
        setEnviado(true);
        setNombre('');
        setMensaje('');
    };
    return (
        <div>
            <h2>Formulario de Contacto</h2>
            {enviado && (
                <div style={{ marginTop: '10px', background: '#000040', padding: '10px' }}>
                   
                    <p>Tu mensaje fue envioado: {mensaje}</p>
                    <p>Tu nombre fue enviado: {nombre}</p>
                    <p>Tu carrera fue enviado: {carrera}</p>
                    <p>Tu correo fue enviado: {correo}</p>
                </div>
            )}
            <form onSubmit={manejarEnvio}>
                <div>
                    <label htmlFor="nombre">Nombre completo:</label><br />
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="correo">correo elegtronico:</label><br />
                    <input
                        id="correo"
                        type="text"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="carrera">Carrera o especialidad:</label><br />
                    <input
                        id="carrera"
                        type="text"
                        value={carrera}
                        onChange={(e) => setCarrera(e.target.value)}
                        required
                    />
                </div>


                <div>
                    <label htmlFor="mensaje">Comentarios:</label><br />
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}