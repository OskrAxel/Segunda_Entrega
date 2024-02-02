<?php
include_once "dompdf/vendor/autoload.php";
use Dompdf\Dompdf;
$dompdf = new Dompdf();
ob_start();
include "./tablapat.php";
$html = ob_get_clean();
$dompdf->loadHtml($html);
$dompdf->set_paper('letter', 'landscape');
$dompdf->render();
header("Content-type: application/pdf");
header("Content-Disposition: inline; filename=Patrocinadores.pdf");
echo $dompdf->output();