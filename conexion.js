<script type="module" src="conexion.js"></script>
// conexion.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>

// conexión a Supabase
const supabaseUrl = 'https://dulncmlwhzmvhvgdadlj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1bG5jbWx3aHptdmh2Z2RhZGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NzA0NTcsImV4cCI6MjA2MjE0NjQ1N30.ZP0RNEpsJJq_lWxWyqePncRyajkm1LCjo7cpUVF5Kjs';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

// Referencia al formulario por su ID
const form = document.getElementById("formularioPago");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevenir recarga de página

  // Obtener valores del formulario
  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const ciudad = document.getElementById("ciudad").value;
  const cp = document.getElementById("cp").value;
  const pais = document.getElementById("pais").value;
  const numero_tarjeta = document.getElementById("numeroTarjeta").value;
  const nombre_tarjeta = document.getElementById("nombreTarjeta").value;
  const fecha = document.getElementById("fecha").value;
  const cvc = document.getElementById("cvc").value;

  // Enviar datos a Supabase
  const response = await fetch(`${supabaseUrl}/rest/v1/datos_personales`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseKey,
      "Authorization": `Bearer ${supabaseKey}`,
      "Prefer": "return=representation"
    },
    body: JSON.stringify({
      nombre,
      direccion,
      ciudad,
      cp,
      pais,
      numero_tarjeta,
      nombre_tarjeta,
      fecha,
      cvc
    })
  });

  // Manejo de respuesta
  const data = await response.json();

  if (!response.ok) {
    alert('❌ Error al guardar: ' + (data.message || JSON.stringify(data)));
  } else {
    alert('✅ Pago registrado con éxito');
    form.reset();
    // Opcional: Redirigir al recibo PDF
    window.location.href = 'Img/Recibo_de_Pago.pdf';
  }
});
