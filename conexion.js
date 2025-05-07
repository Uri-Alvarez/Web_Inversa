const supabaseUrl = 'https://dulncmlwhzmvhvgdadlj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1bG5jbWx3aHptdmh2Z2RhZGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NzA0NTcsImV4cCI6MjA2MjE0NjQ1N30.ZP0RNEpsJJq_lWxWyqePncRyajkm1LCjo7cpUVF5Kjs'
const supabase = createClient(supabaseUrl, supabaseKey)

const formulario = document.getElementById('formularioPago')

formulario.addEventListener('submit', async (e) => {
  e.preventDefault()

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
    total: 15.00
  }

  const { data, error } = await supabase
    .from('datos_personales') // Cambia 'pagos' por el nombre real de tu tabla
    .insert([datos])

  if (error) {
    alert('❌ Error al guardar: ' + error.message)
  } else {
    alert('✅ Pago registrado con éxito')
    formulario.reset()
    // Si quieres redirigir o descargar algo, hazlo aquí
    window.location.href = 'Img/Recibo_de_Pago.pdf'
  }
})
