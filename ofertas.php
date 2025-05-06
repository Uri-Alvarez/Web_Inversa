<?php
$producto = [
    "nombre" => "GENAI P2961 Auriculares Inalámbricos",
    "descripcion" => "20H de Tiempo de Reproducción, Cómodos y Plegables, Conectividad Inalámbrica, Micrófono con Cancelación de Ruido.",
    "precio_original" => 876.54,
    "precio_descuento" => 158.43,
    "colores" => ["rosa", "oscuro", "celeste", "verde", "lechoso"],
    "imagen_principal" => "img/lechoso.jpg"
];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title><?= $producto['nombre'] ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="producto">
        <div class="galeria">
            <img src="<?= $producto['imagen_principal'] ?>" alt="Imagen principal" id="imagen-principal">
            <div class="miniaturas">
                <?php foreach ($producto['colores'] as $color): ?>
                    <img src="img/<?= $color ?>.jpg" alt="<?= $color ?>" onclick="cambiarImagen('img/<?= $color ?>.jpg')">
                <?php endforeach; ?>
            </div>
        </div>
        <div class="info">
            <h1><?= $producto['nombre'] ?></h1>
            <p><?= $producto['descripcion'] ?></p>
            <p class="precio">MX$<?= number_format($producto['precio_descuento'], 2) ?> 
                <span class="tachado">MX$<?= number_format($producto['precio_original'], 2) ?></span>
            </p>
            <p class="descuento">81% OFF</p>

            <label for="color">Color:</label>
            <select id="color">
                <?php foreach ($producto['colores'] as $color): ?>
                    <option><?= ucfirst($color) ?></option>
                <?php endforeach; ?>
            </select>

            <button class="btn">Añadir al carrito</button>
        </div>
    </div>

    <script>
        function cambiarImagen(src) {
            document.getElementById('imagen-principal').src = src;
        }
    </script>
</body>
</html>
