import{_ as i,c as a,o as s,a4 as n}from"./chunks/framework.CL14adID.js";const g=JSON.parse('{"title":"Planificación de materiales","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Planificacion_SAP.md","filePath":"guide/Planificacion_SAP.md"}'),e={name:"guide/Planificacion_SAP.md"},t=n(`<h1 id="planificacion-de-materiales" tabindex="-1">Planificación de materiales <a class="header-anchor" href="#planificacion-de-materiales" aria-label="Permalink to &quot;Planificación de materiales&quot;">​</a></h1><p>En SAP MM, la planificacion de materiales (MRP) es el proceso por el cual se determinan de forma automática las necesidades de reaprovisionamiento de materiales.</p><h2 id="parametros-mas-relevantes" tabindex="-1">Parámetros más relevantes <a class="header-anchor" href="#parametros-mas-relevantes" aria-label="Permalink to &quot;Parámetros más relevantes&quot;">​</a></h2><table><thead><tr><th>Nombre del Parámetro</th><th>Parámetro</th><th>Descripción</th><th>Propósito</th></tr></thead><tbody><tr><td>MRP Type</td><td>MRP Tipo</td><td>Determina el método de planificación y reabastecimiento del material</td><td>Controla si el material se reabastece mediante producción o compra, y cómo se planifica.</td></tr><tr><td>MRP Group</td><td>Grupo de MRP</td><td>Configuración que agrupa materiales con criterios de planificación similares</td><td>Facilita la gestión y configuración de materiales que deben ser planificados de manera similar.</td></tr><tr><td>MRP Controller</td><td>Controlador de MRP</td><td>Responsable de la planificación de materiales dentro de un área específica</td><td>Asigna el responsable de planificación para una serie de materiales, facilitando la organización y responsabilidad.</td></tr><tr><td>Lot Size</td><td>Tipo de Lote</td><td>Define cómo se calculan los tamaños de lote en los pedidos de material</td><td>Optimiza la cantidad de material pedido, minimizando el costo o maximizando la eficiencia de fabricación.</td></tr><tr><td>Minimum Stock Level</td><td>Nivel de Stock Mínimo</td><td>Cantidad mínima de inventario que debe mantenerse en todo momento</td><td>Previene la ruptura de stock, asegurando que siempre haya material disponible para la producción o venta.</td></tr><tr><td>Reorder Point</td><td>Punto de Pedido</td><td>Nivel de inventario que activa un nuevo pedido de reabastecimiento</td><td>Automatiza el proceso de pedido para asegurar un flujo constante de materiales sin interrupciones de producción.</td></tr><tr><td>Replenishment Quantity</td><td>Cantidad de Reaprovisionamiento</td><td>Cantidad estándar a ordenar cada vez que se alcanza el punto de pedido</td><td>Simplifica el proceso de pedido al establecer una cantidad predeterminada para reordenar.</td></tr><tr><td>Planning Horizon</td><td>Horizonte de Planificación</td><td>Periodo futuro para el cual se realiza la planificación de material</td><td>Define el rango temporal para la planificación de la producción y la compra, asegurando visibilidad a largo plazo.</td></tr><tr><td>Planning Cycle</td><td>Periodicidad</td><td>Frecuencia con la que se ejecuta la planificación MRP</td><td>Determina cuán a menudo se actualiza y recalcula la planificación de necesidades de materiales.</td></tr><tr><td>Safety Stock</td><td>Stock de Seguridad</td><td>Cantidad adicional de inventario mantenida para mitigar el riesgo de ruptura de stock</td><td>Proporciona un colchón contra fluctuaciones en la demanda o retrasos en el suministro, asegurando operaciones continuas.</td></tr><tr><td>Lead Time</td><td>Plazo de Entrega</td><td>Tiempo requerido desde el pedido hasta la recepción del material</td><td>Importante para calcular cuándo ordenar materiales para cumplir con las fechas de producción sin mantener inventario excesivo.</td></tr><tr><td>Forecasting Model</td><td>Modelo de Pronóstico</td><td>Modelo estadístico utilizado para predecir la demanda futura basada en datos históricos</td><td>Permite una planificación más precisa al estimar las necesidades futuras de materiales basadas en tendencias y patrones pasados.</td></tr><tr><td>Scrap Percentage</td><td>Porcentaje de Desperdicio</td><td>Porcentaje estimado de material que se desperdiciará durante la producción</td><td>Ajusta la cantidad de material necesario para pedidos, considerando la pérdida esperada durante la fabricación.</td></tr></tbody></table><h1 id="codigo-python-para-modificar-un-parametro-de-planificacion-en-sap" tabindex="-1">Código Python para Modificar un Parámetro de Planificación en SAP <a class="header-anchor" href="#codigo-python-para-modificar-un-parametro-de-planificacion-en-sap" aria-label="Permalink to &quot;Código Python para Modificar un Parámetro de Planificación en SAP&quot;">​</a></h1><p>Este script en Python utiliza <code>win32com</code> para interactuar con SAP GUI. Automatiza el proceso de modificación de un parámetro de planificación de un material mediante la transacción MD02.</p><h2 id="requisitos" tabindex="-1">Requisitos <a class="header-anchor" href="#requisitos" aria-label="Permalink to &quot;Requisitos&quot;">​</a></h2><ul><li>Python 3</li><li><code>pywin32</code> instalado: puede instalarse con <code>pip install pywin32</code></li><li>SAP GUI instalado y configurado en el sistema</li><li>Scripting de GUI habilitado en el lado del cliente y del servidor en SAP</li></ul><h2 id="codigo" tabindex="-1">Código <a class="header-anchor" href="#codigo" aria-label="Permalink to &quot;Código&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> win32com.client</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Conectar con SAP GUI</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SapGuiAuto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> win32com.client.GetObject(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SAPGUI&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        application </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SapGuiAuto.GetScriptingEngine</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        connection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> application.Children(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> connection.Children(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Acceder a la transacción MD02 para planificar un material</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.findById(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wnd[0]/tbar[0]/okcd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/nmd02&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.findById(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wnd[0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).sendVKey(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        time.sleep(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Dar tiempo para que cargue la transacción</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Ingresar el número de material que deseamos planificar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.findById(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wnd[0]/usr/ctxtDISPO-PLNUM&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;000000001000&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.findById(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wnd[0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).sendVKey(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Navegar a la pestaña de parámetros donde se realiza la modificación</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.findById(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wnd[0]/usr/tabsTABSTRIP/tabpT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">01&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).select()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        time.sleep(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Esperar a que la GUI responda</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Modificar el campo de parámetro de planificación</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.findById(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wnd[0]/usr/subSUBSCREEN:SAPLMDR1:1105/ctxtMDPA-PARAMETER&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Nuevo valor del parámetro&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.findById(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wnd[0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).sendVKey(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Guardar los cambios</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.findById(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wnd[0]/tbar[0]/btn[11]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).press()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Botón guardar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Modificación de parámetro completada con éxito.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    except</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Exception</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    finally</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Cerrar conexión</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> session: session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> connection: connection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> application: application </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SapGuiAuto: SapGuiAuto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;__main__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    main()</span></span></code></pre></div>`,10),l=[t];function d(p,r,h,k,o,c){return s(),a("div",null,l)}const y=i(e,[["render",d]]);export{g as __pageData,y as default};