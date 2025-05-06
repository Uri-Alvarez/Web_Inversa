<?php
if (isset($_GET['q'])) {
  $busqueda = htmlspecialchars($_GET['q']);
  echo "<h1>Resultados para: $busqueda</h1>";
  // Aquí iría la lógica de búsqueda en base de datos
} else {
  echo "<h1>No se ingresó ningún término de búsqueda.</h1>";
}
?>
