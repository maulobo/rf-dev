import { transporter, mailOptions } from "../src/app/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Nuevo mensaje de ${data.nombre}`,
        text: `¡Hola! Has recibido un nuevo mensaje de ${data.nombre}.\n\nConsulta:\n${data.mensaje}`,
        html: `
          <h1>¡Hola!</h1>
          <p>Has recibido un nuevo mensaje de <strong>${data.nombre}</strong>.</p>
          <h2>Datos de contacto:</h2>
          <p>Correo: ${data.email}</p>
          <p>Teléfono: ${data.telefono}</p>
          <h2>Consulta:</h2>
          <p>${data.mensaje}</p>
          <p>¡Revisa tu bandeja para responder!</p>
        `,
      });
      return res.status(200).json({ success: "true" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "no se ha enviado " });
    }
  }
};

export default handler;
