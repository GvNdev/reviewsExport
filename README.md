# Preparación

Obtener los diferentes archivos JSON de reviews

## Creación de función para guardado de JSON de reviews

En la consola del navegador, ejecutar el siguiente código:

```bash
(function(console){
	console.save = function(data, filename){
		if(!data) {
			console.error('Console.save: No data')
			return;
		}

		if(!filename) filename = 'console.json'

		if(typeof data === "object"){
			data = JSON.stringify(data, undefined, 4)
		}

		var blob = new Blob([data], {type: 'text/json'}),
			e    = document.createEvent('MouseEvents'),
			a    = document.createElement('a')

		a.download = filename
		a.href = window.URL.createObjectURL(blob)
		a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
		e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
		a.dispatchEvent(e)
	}
})(console)
```

## Ejecución de guardado de JSON de reviews

En la consola del navegador, ejecutar el siguiente código:

```bash
let names = Array.from(document.querySelectorAll('.d4r55')).map(x => `${x.outerText}`)
let stars = Array.from(document.querySelectorAll('.kvMYJc')).map(x => `${x.ariaLabel}`)
let review = Array.from(document.querySelectorAll('.MyEned')).map(x => `${x.outerText.replace("\n","")}`)

const finalReviews = names.map((val, idx) => {
	return {
		name: val,
		stars: stars[idx],
		review: review[idx]
	}
})

console.log(finalReviews)
console.save(finalReviews, 'nombreDelArchivo.json')
```

* NOTA: reemplazar 'nombreDelArchivo' por el nombre del lugar (ej: arenal.json)

# Creación del archivo CSV

1. Dentro de la carpeta principal del proyecto, crear los siguientes directorios:
    - export
    - reviews

2. Abrir una consola en la carpeta principal del proyecto, y ejecutar el comando `npm install`

3. Colocar los diferentes JSON de reviews dentro de la carpeta `reviews`

4. Ejecutar el archivo index.js con el comando `node index.js`

5. El archivo resultante se guardará dentro de la carpeta `export` con el nombre `reviewsExportAAAA-MM-DD.csv` (ej: `reviewsExport2022-09-15.csv`)