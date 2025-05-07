// Conexión a Supabase
const supabaseUrl = 'https://dulncmlwhzmvhvgdadlj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1bG5jbWx3aHptdmh2Z2RhZGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NzA0NTcsImV4cCI6MjA2MjE0NjQ1N30.ZP0RNEpsJJq_lWxWyqePncRyajkm1LCjo7cpUVF5Kjs'
const supabase = createClient(supabaseUrl, supabaseKey);

// Selección del formulario y botón
const btnPagarDescargar = document.getElementById('btnPagarDescargar');
const formulario = document.getElementById('formularioPago');

// Manejo del click del botón
btnPagarDescargar.addEventListener('click', async (e) => {
  e.preventDefault(); // Prevenir el comportamiento por defecto del botón

  // Obtener los datos del formulario
  const datos = {
    nombre: document.getElementById('nombre').value,
    direccion: document.getElementById('direccion').value,
    ciudad: document.getElementById('ciudad').value,
    cp: document.getElementById('cp').value,
    pais: document.getElementById('pais').value,
    metodo_pago: document.getElementById('metodo').value,
    numero_tarjeta: document.getElementById('numeroTarjeta').value,
    nombre_tarjeta: document.getElementById('nombreTarjeta').value,
    fecha: document.getElementById('fecha').value,
    cvc: document.getElementById('cvc').value,
    total: 15.00 // Total de la compra
  };

  // Insertar los datos en Supabase
  const { data, error } = await supabase
    .from('datos_personales') // Cambia 'datos_personales' por el nombre real de tu tabla
    .insert([datos]);

  if (error) {
    alert('❌ Error al guardar: ' + error.message);
  } else {
    alert('✅ Pago registrado con éxito');
    formulario.reset(); // Limpiar el formulario

    // Descargar el archivo PDF
    const link = document.createElement('a');
    link.href = 'Img/Recibo_de_Pago.pdf';  // Ruta del archivo PDF
    link.download = 'Recibo_de_Pago.pdf';  // Nombre del archivo al descargar
    link.click();  // Hacer clic programáticamente para iniciar la descarga
  }
});
