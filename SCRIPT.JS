bplist00�_WebMainResource�	
^WebResourceURL_WebResourceTextEncodingName_WebResourceData_WebResourceMIMEType_WebResourceFrameName_file:///index.htmlUutf-8O9Z<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// Función para actualizar la fecha y hora automáticamente cada minuto</p>
<p class="p1">function updateDateTime() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const now = new Date();</p>
<p class="p1"><span class="Apple-converted-space">    </span>const day = String(now.getDate()).padStart(2, '0');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const month = String(now.getMonth() + 1).padStart(2, '0'); // Enero es 0</p>
<p class="p1"><span class="Apple-converted-space">    </span>const year = now.getFullYear();</p>
<p class="p1"><span class="Apple-converted-space">    </span>const hours = String(now.getHours()).padStart(2, '0');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const minutes = String(now.getMinutes()).padStart(2, '0');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const formattedDate = `${day}/${month}/${year}`;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const formattedTime = `${hours}:${minutes} horas`;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('date').value = formattedDate;</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('time').value = formattedTime;</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">// Llamar a updateDateTime() al cargar la página</p>
<p class="p1">updateDateTime();</p>
<p class="p2"><br></p>
<p class="p1">// Actualizar la fecha y hora automáticamente cada minuto</p>
<p class="p1">setInterval(updateDateTime, 60000);</p>
<p class="p2"><br></p>
<p class="p1">// Esta función determina el saludo basado en la hora</p>
<p class="p1">function getGreeting(hour) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (hour &gt;= 5 &amp;&amp; hour &lt; 12) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>return 'Buenos días';</p>
<p class="p1"><span class="Apple-converted-space">    </span>} else if (hour &gt;= 12 &amp;&amp; hour &lt; 19) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>return 'Buenas tardes';</p>
<p class="p1"><span class="Apple-converted-space">    </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">        </span>return 'Buenas noches';</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function formatNames(names) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const comisarios = names.filter(name =&gt; name.startsWith('Comisario'));</p>
<p class="p1"><span class="Apple-converted-space">    </span>const subinspectores = names.filter(name =&gt; name.startsWith('Subinspector'));</p>
<p class="p1"><span class="Apple-converted-space">    </span>const oficiales = names.filter(name =&gt; name.startsWith('Oficial'));</p>
<p class="p1"><span class="Apple-converted-space">    </span>const suboficiales = names.filter(name =&gt; name.startsWith('Suboficial'));</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>let comisarioText = comisarios.length === 1</p>
<p class="p1"><span class="Apple-converted-space">        </span>? `del ${comisarios[0]}`</p>
<p class="p1"><span class="Apple-converted-space">        </span>: `de los ${comisarios.join(', ')}`;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>let subinspectorText = '';</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (subinspectores.length === 1) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>subinspectorText = `del ${subinspectores[0]}`;</p>
<p class="p1"><span class="Apple-converted-space">    </span>} else if (subinspectores.length &gt; 1) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>subinspectorText = `de los Subinspectores ${subinspectores.join(', ')}`;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>let oficialText = '';</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (oficiales.length === 1) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>oficialText = `del ${oficiales[0]}`;</p>
<p class="p1"><span class="Apple-converted-space">    </span>} else if (oficiales.length &gt; 1) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>oficialText = `de los Oficiales ${oficiales.slice(0, -1).join(', ')} y ${oficiales[oficiales.length - 1]}`;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>let suboficialesText = '';</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (suboficiales.length &gt; 0) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const suboficialNames = suboficiales.map(name =&gt; name.replace('Suboficial ', ''));</p>
<p class="p1"><span class="Apple-converted-space">        </span>const isOnlyWomen = suboficialNames.every(name =&gt; ['Alondra Sandoval Vázquez', 'Celeste García Alemán'].includes(name));</p>
<p class="p1"><span class="Apple-converted-space">        </span>const hasMale = suboficialNames.some(name =&gt; !['Alondra Sandoval Vázquez', 'Celeste García Alemán'].includes(name));</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">        </span>if (isOnlyWomen) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>// Caso de solo mujeres (Alondra y Celeste)</p>
<p class="p1"><span class="Apple-converted-space">            </span>suboficialesText = `de las Suboficiales ${suboficialNames.join(' y ')}`;</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else if (hasMale) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>// Caso de mezcla de hombres y mujeres (o solo hombres)</p>
<p class="p1"><span class="Apple-converted-space">            </span>const prefix = hasMale ? 'de los Suboficiales' : 'de las Suboficiales';</p>
<p class="p1"><span class="Apple-converted-space">            </span>const formattedNames = suboficialNames.length &gt; 2</p>
<p class="p1"><span class="Apple-converted-space">                </span>? `${suboficialNames.slice(0, -1).join(', ')} y ${suboficialNames[suboficialNames.length - 1]}`</p>
<p class="p1"><span class="Apple-converted-space">                </span>: suboficialNames.join(' y ');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">            </span>suboficialesText = `${prefix} ${formattedNames}`;</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>let combinedText = [];</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (comisarios.length &gt; 0) combinedText.push(comisarioText);</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (subinspectores.length &gt; 0) combinedText.push(subinspectorText);</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (oficiales.length &gt; 0) combinedText.push(oficialText);</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (suboficiales.length &gt; 0) combinedText.push(suboficialesText);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Generar el texto combinado con la coma antes del "y"</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (combinedText.length &gt; 1) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const last = combinedText.pop();</p>
<p class="p1"><span class="Apple-converted-space">        </span>return `${combinedText.join(', ')} y ${last}`;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>return combinedText.join(', ');</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">document.getElementById('generatePinButton').addEventListener('click', function() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const pinType = document.getElementById('pinType').value;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const date = document.getElementById('date').value;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const time = document.getElementById('time').value;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const selectedNames = Array.from(document.querySelectorAll('#names input:checked')).map(checkbox =&gt; checkbox.value);</p>
<p class="p1"><span class="Apple-converted-space">    </span>const selectedVehicles = Array.from(document.querySelectorAll('#vehicles input:checked')).map(checkbox =&gt; checkbox.value);</p>
<p class="p1"><span class="Apple-converted-space">    </span>const selectedPlaces = Array.from(document.querySelectorAll('#places input:checked')).map(checkbox =&gt; checkbox.value);</p>
<p class="p1"><span class="Apple-converted-space">    </span>const signingOfficer = document.getElementById('signingOfficer').value;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Obtener el valor del campo "Otro(a):"</p>
<p class="p1"><span class="Apple-converted-space">    </span>const otherPlace = document.getElementById('otroLugar').value.trim();</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (otherPlace) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>selectedPlaces.push(otherPlace);<span class="Apple-converted-space">  </span>// Si hay un lugar adicional, lo agregamos</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const namesIntro = formatNames(selectedNames);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Verificamos si el lugar ya comienza con "a" para evitar duplicar</p>
<p class="p1"><span class="Apple-converted-space">    </span>let placesText = selectedPlaces.join(', ');</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (!placesText.startsWith('a ')) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>placesText = 'a ' + placesText;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const vehiclesText = selectedVehicles.map(vehicle =&gt; `•${vehicle}`).join('\n');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const now = new Date();</p>
<p class="p1"><span class="Apple-converted-space">    </span>const hour = now.getHours();</p>
<p class="p1"><span class="Apple-converted-space">    </span>const greeting = getGreeting(hour);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Lógica para determinar si es "quien se dirige" o "quienes se dirigen" para "salida"</p>
<p class="p1"><span class="Apple-converted-space">    </span>const actionText = selectedNames.length === 1<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">        </span>? (pinType === 'salida' ? 'quien se dirige' : 'quien se dirigió')<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">        </span>: (pinType === 'salida' ? 'quienes se dirigen' : 'quienes se dirigieron');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const pinText = `*SECRETARÍA DE SEGURIDAD PÚBLICA*</p>
<p class="p1">*DIRECCIÓN GENERAL DE POLICÍA CIBERNÉTICA*</p>
<p class="p1">*AGUASCALIENTES, AGS.*</p>
<p class="p2"><br></p>
<p class="p1">*Fecha*</p>
<p class="p1">${date}</p>
<p class="p2"><br></p>
<p class="p1">*QTR*</p>
<p class="p1">${time}</p>
<p class="p2"><br></p>
<p class="p1">*${greeting}*</p>
<p class="p1">Para conocimiento de la superioridad, por medio del presente me permito informar ${pinType === 'salida' ? 'la salida' : 'el regreso'} ${namesIntro}, ${actionText} ${placesText}.</p>
<p class="p2"><br></p>
<p class="p1">*Vehículos*</p>
<p class="p1">${vehiclesText}</p>
<p class="p2"><br></p>
<p class="p1">*Respetuosamente*</p>
<p class="p1">${signingOfficer}`;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Aquí se actualiza el contenido del elemento 'pinOutput' con el texto del PIN generado</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('pinOutput').textContent = pinText;</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">// Función para copiar el PIN al portapapeles</p>
<p class="p1">document.getElementById('copyPinButton').addEventListener('click', function() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const pinText = document.getElementById('pinOutput').textContent;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>navigator.clipboard.writeText(pinText).then(function() {</p>
<p class="p1"><span class="Apple-converted-space">        </span>alert('El PIN ha sido copiado al portapapeles');</p>
<p class="p1"><span class="Apple-converted-space">    </span>}).catch(function(err) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>alert('Error al copiar el PIN: ', err);</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1">});</p>
</body>
</html>
Ytext/htmlP    ( 7 U g } � � �::                           :