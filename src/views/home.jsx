import React from 'react'


const Home = () => {

    const CapturaDoc = async (env_facial,IdSesion) => {
        try {
            if (env_facial == "s") {
                AuthModule(document.querySelector("#containerverificacion"), {
                    authflow: "facevsdoc", // o "facevstoken"
                    authmodule_session: IdSesion,
                    modules_retry: 1,
                    no_slider: true,
                    country: ["chl", "pass"],
                    client_audit: {
                        transaction_id: "TRANSACEX_ID",
                        id_user: "9747182-7",
                        doctype: "CHL2",
                        nat: "CHL",
                    },
                    callback: (data) => {
                        document.getElementById("Rverif").value = data.token;
                    },
                    error: (data) => {
                        console.error("Error durante la verificación:", data);
                    }
                });
            }



            /*    TOCautocapture('containerautocaptura', {
                    locale: "es",
                    session_id: IdSesion,
                    document_type: "CHL2",
                    document_side: caracedula,
                    callback: function(captured_token, image_token)
                    {   caracedula == "front" ? document.getElementById("Tfront").value = captured_token : document.getElementById("Tback").value = captured_token;
                        caracedula == "front" ? document.getElementById("Imgfront").value = image_token : document.getElementById("Imgback").value = image_token;
                    },
                    failure: function(error){ alert(error); }
                });
                */
 
           /* else {
                TOCautocapture('containerautocaptura', {
                    locale: "es",
                    session_id: IdSesion,
                    document_type: "CHL2",
                    document_side: caracedula,
                    callback: function(captured_token, image)
                    { caracedula == "front" ? 
                        document.getElementById("Tfront").value = captured_token : 
                        document.getElementById("Tback").value = captured_token },
                    failure: function(error){ alert(error); },
                    alt_server: "https://prod-capture.tocws.com",
                    url_lbac: "https://prod-api.7oc.cl/auto-capture/data/v2"
                });
            }*/
        } catch (error) {
            console.log(error);
        }
    };


    return (
    <>
    <div className='col container-fluid d-flex justify-content-evenly pt-5 ps-5'>
        <form>
            <div className="mb-3">
                <select className="form-select" id='envselect'>
                    <option value="s" selected>Sandbox</option>
                    <option value="p">Produccion</option>
                </select>            
            </div>
        </form>
        <form>
            <div className="mb-3">
                <h2>VERIFICACION</h2>
                <label className="form-label">ID Sesion</label>
                <input type="text" className="form-control" id="IdSesion" />
                <label className="form-label">Respuesta</label>
                <input type="text" className="form-control" id="Rverif" />
            </div>
            <button type="button" onClick={() => CapturaDoc(document.getElementById("envselect").value,document.getElementById("IdSesion").value)} className="btn btn-outline-primary m-2">Verificar</button>
        </form>    
    </div>

    <div className="cuadroverificacion" id='containerverificacion'></div>
    </>
    )
}

export default Home